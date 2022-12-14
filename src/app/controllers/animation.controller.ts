import { AnimationController } from '@ionic/angular'

export const customAnimation = (_: HTMLElement, opts: any) => {
	let animationCtrl = new AnimationController()
	// create root transition
	const rootTransition = animationCtrl
		.create()
		.duration(opts.duration || 333)
		.easing('cubic-bezier(0.7,0,0.3,1)')

	const enterTransition = animationCtrl.create().addElement(opts.enteringEl)
	const exitTransition = animationCtrl.create().addElement(opts.leavingEl)

	enterTransition.fromTo('opacity', '0', '1')
	exitTransition.fromTo('opacity', '1', '0')

	if (opts.direction === 'forward') {
		enterTransition.fromTo('transform', 'translateX(-1.5%)', 'translateX(0%)')
		exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(1.5%)')
	} else {
		enterTransition.fromTo('transform', 'translateX(1.5%)', 'translateX(0%)')
		exitTransition.fromTo('transform', 'translateX(0%)', 'translateX(-1.5%)')
	}

	rootTransition.addAnimation([enterTransition, exitTransition])
	return rootTransition
}
