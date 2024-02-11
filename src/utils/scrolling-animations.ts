import { animate, inView, stagger, type Easing } from 'motion';

import { ANIMATIONS } from '../config';

export class ScrollingAnimations {
	private animationElements: Element[] = [];
	private sivenavItems: HTMLAnchorElement[] = [];
	private header?: HTMLElement | null;
	private sections: Element[] = [];
	private activeSection?: Element;
	private activeSidenavItem?: HTMLAnchorElement;
	private scrollY = 0;
	private height = 0;
	private sectionsInView: Element[] = [];

	constructor() {
		window.onload = () => this.init();
	}

	private init(): void {
		this.animationElements = Array.from(document.querySelectorAll(`[${ANIMATIONS.attributeName}]`));
		this.sivenavItems = Array.from(document.querySelectorAll('.sidenav-list-item'));
  		this.header = document.querySelector('header');
  		this.sections = Array.from(document.querySelectorAll('section'));

		animate(this.animationElements, { opacity: 0, transform: ANIMATIONS.transformFrom }, { duration: 0 });

		window.addEventListener('scroll', () => this.refresh());
		window.addEventListener('resize', () => this.refresh());

		this.refresh();
		
		animate(`.header [${ANIMATIONS.attributeName}]`, { opacity: 1, transform: ANIMATIONS.transformTo }, { duration: ANIMATIONS.duration, delay: stagger(ANIMATIONS.stagger), easing: ANIMATIONS.easing as Easing })
			.finished.then(() => {
			
			inView('section,footer', ({ target }) => {
				this.sectionsInView.push(target);
				if (this.scrollY === 0 && target !== this.sections[0]) {
					return;	
				}

				animate(target.querySelectorAll(`[${ANIMATIONS.attributeName}]`), { opacity: 1, transform: ANIMATIONS.transformTo }, { duration: ANIMATIONS.duration, delay: stagger(ANIMATIONS.stagger), easing: ANIMATIONS.easing as Easing });
				return () => this.sectionsInView.slice(this.sectionsInView.indexOf(target), 1);
			});

			inView('.sidenav,.sidebar', ({ target }) => {
				animate(target.querySelectorAll(`[${ANIMATIONS.attributeName}]`), { opacity: 1, transform: ANIMATIONS.transformTo }, { duration: ANIMATIONS.duration, delay: stagger(ANIMATIONS.stagger, { start: target.classList.contains('sidebar') ? 1 : 0 }), easing: ANIMATIONS.easing as Easing });
				return () => animate(target.querySelectorAll(`[${ANIMATIONS.attributeName}]`), { opacity: 0, transform: ANIMATIONS.transformFrom }, { duration: 0 });
			});
		});
	}

	public refresh(): void {
		this.scrollY = window.scrollY;
		this.height = window.innerHeight;

		this.setActiveSection();
		this.toggleMenuBackground();
		this.toggleSectionHeaderBorder();
		this.applySidenavAnimations();
	}

	private applySidenavAnimations(): void {
		if (this.scrollY === 0) {
			this.sections.filter(s => s !== this.sections[0]).forEach(section => section.classList.add('invisible'));
			this.sivenavItems.forEach(item => item.classList.add('collapsed', 'duration-500'));
			if (this.sections.length > 1) {
				animate(`section:not(:first-child) [${ANIMATIONS.attributeName}]`, { opacity: 0, transform: ANIMATIONS.transformFrom }, { duration: 0 });
			}
			return;
		}
		
		this.sections.filter(s => s.id !== 'hero' && s.classList.contains('invisible')).forEach(section => {
			section.classList.remove('invisible');
			if (this.sectionsInView.includes(section)) {
				animate(section.querySelectorAll(`[${ANIMATIONS.attributeName}]`), { opacity: 1, transform: ANIMATIONS.transformTo }, { duration: ANIMATIONS.duration, delay: stagger(ANIMATIONS.stagger), easing: ANIMATIONS.easing as Easing });
			}
		});
		this.sivenavItems.forEach(item => item.classList.remove('collapsed'));
	}
	
	private setActiveSection() {
		this.activeSection = this.sections.filter(s => s.getBoundingClientRect().y <= 1).sort((s1, s2) => s2.getBoundingClientRect().y - s1.getBoundingClientRect().y)[0] ?? this.sections[0];
		this.activeSidenavItem =  this.sivenavItems.find(s => s.href.toLowerCase().includes(this.activeSection!.id.toLowerCase())) ?? this.sivenavItems[0];

		this.sections.filter(s => s !== this.activeSection).forEach(section => section.classList.remove('active'));
		this.sivenavItems.filter(s => s !== this.activeSidenavItem).forEach(item => item.classList.remove('active'));

		this.activeSection.classList.add('active');
		this.activeSidenavItem.classList.add('active');
	}

	private toggleMenuBackground() {
		const sectionHeader = this.activeSection?.querySelector('.section-header'); 
		const nextSection = this.sections.length > 1 ? this.sections[this.sections.indexOf(this.activeSection!) + 1] : null;
		const nextSectionHeader = nextSection?.querySelector('.section-header'); 

		if (!this.header?.classList.contains('expanded') && (sectionHeader || 
				(nextSection && (!nextSectionHeader || nextSection.getBoundingClientRect().y < nextSectionHeader.getBoundingClientRect().height)))) {
			this.header?.classList.remove('bg-background');
			return;
		}

		;
		this.header?.classList.add('bg-background');
	}

	private toggleSectionHeaderBorder() {
		this.sections.filter(s => s.querySelector('.section-header')).forEach(section => {
			const sectionHeader = section.querySelector('.section-header');

			if (section === this.activeSection && sectionHeader && sectionHeader.getBoundingClientRect().y >= 0) {
				sectionHeader?.classList.remove('border-transparent');
				sectionHeader?.classList.add('border-outline-variant');
				return;
			}

			sectionHeader?.classList.add('border-transparent');
			sectionHeader?.classList.remove('border-outline-variant');
		});
	}
}