import { trigger, transition, style, query, animateChild, group, animate, keyframes} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('homePage <=> projectsPage', [
		// style({ position: 'relative' }),
		query(':enter, :leave', [
			// style({
			// 	position: 'absolute',
			// 	top: 0,
			// 	right: 0,
			// 	width: '100%'
			// })
		]),
		// query(':enter', [style({ display: "none" })]),
		// query(':leave', [style({ display: "none" })]),
		query(':enter', [style({ opacity: 0 })]),
		// query(':leave', animateChild()),
		// group([
            query(':leave', [animate('.5s', keyframes([
                style({ opacity: 1, offset: 0}),
                style({ opacity: 0, offset: 1})
            ]))]),
            query(':leave', [animate('.1s', keyframes([
                style({ display: "flex", offset: 0}),
                style({ display: "none", offset: 1})
            ]))]),
			// query(':enter', [animate('.5s', keyframes([
            //     style({ opacity: 0, display: "none", offset: 0}),
            //     style({ opacity: 0, display: "none", offset: .5}),
            //     style({ opacity: 1, offset: 1})
            //   ]))]),
			query(':enter', [animate('.5s', keyframes([
                style({ opacity: 0, offset: 0}),
                style({ opacity: 1, offset: 1}),
              ]))]),
		// ]),
		// query(':enter', animateChild())
	])
]);