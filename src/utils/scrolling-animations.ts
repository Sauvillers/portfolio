const ANIMATION_ATTRIBUTE_NAME = 'data-animation';

export class ScrollingAnimations {
	private animationElements: Element[] = [];
	private sivenavItems: HTMLAnchorElement[] = [];
	private header?: HTMLElement | null;
	private sections: Element[] = [];
	private activeSection?: Element;
	private activeSidenavItem?: HTMLAnchorElement;
	private scrollY = 0;
	private height = 0;

	constructor() {
		window.onload = () => this.init();
	}

	private init(): void {
		this.animationElements = Array.from(document.querySelectorAll(`[${ANIMATION_ATTRIBUTE_NAME}]`));
		this.sivenavItems = Array.from(document.querySelectorAll('.sidenav-list-item'));
  		this.header = document.querySelector('header');
  		this.sections = Array.from(document.querySelectorAll('section'));

		this.animationElements.forEach(element => element.classList.add('opacity-0'));

		window.addEventListener('scroll', () => this.refresh());
		window.addEventListener('resize', () => this.refresh());

		this.refresh();
	}

	public refresh(): void {
		this.scrollY = window.scrollY;
		this.height = window.innerHeight;

		this.setActiveSection();
		this.toggleMenuBackground();
		this.toggleSectionHeaderBorder();
		this.applySidenavAnimations();
		this.applyAnimations();
	}

	private applyAnimations(): void {
		let i = 0;

		this.animationElements.filter(e => !e.closest('.invisible')).forEach(element => {
			const rect = element.getBoundingClientRect();
			if ((rect.y + rect.height) >= 0 && rect.y < this.height && !element.classList.contains('opacity-100')) {
				setTimeout(() => element.classList.add('opacity-100', 'animate-fade-up'), i++ * 100);
			}
		});
	}

	private applySidenavAnimations(): void {
		if (this.scrollY === 0) {
			this.sections.filter(s => s !== this.sections[0]).forEach(section => {
				section.classList.add('invisible');
				this.animationElements.filter(e => e.closest('#' + section.id)).forEach(element => {
					element.classList.remove('opacity-100', 'animate-fade-up');
				});
			});
			this.sivenavItems.forEach(item => item.classList.add('collapsed', 'duration-500'));
			return;
		}
		
		this.sections.filter(s => s.id !== 'hero').forEach(section => section.classList.remove('invisible'));
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
		const nextSection = this.sections[this.sections.indexOf(this.activeSection!) + 1];
		const nextSectionHeader = nextSection?.querySelector('.section-header'); 

		if (!this.header?.classList.contains('expanded') && (sectionHeader || 
				(!nextSectionHeader || nextSection.getBoundingClientRect().y < nextSectionHeader.getBoundingClientRect().height))) {
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