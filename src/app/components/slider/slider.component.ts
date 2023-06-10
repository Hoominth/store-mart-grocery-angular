import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  slides: Slide[] = [];
  currentSlideIndex = 0;
  interval: any;

  ngOnInit() {
    this.slides = [
      {
        imageUrl:
          'http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-3.png',
        title: 'Pure Coffee Big discount',
        description: 'Save up to 50% off on your first order',
      },
      {
        imageUrl:
          'http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-4.png',
        title: 'Snacks box daily save',
        description: 'Sign up for the daily newsletter',
      },
    ];

    this.startSlider();
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.showNextSlide();
    }, 6000);
  }

  showNextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  showPreviousSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  pauseSlider() {
    clearInterval(this.interval);
  }
}

interface Slide {
  imageUrl: string;
  title: string;
  description: string;
}
