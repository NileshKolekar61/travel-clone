import { Component, OnInit } from '@angular/core';
import PopularDestinations from '../../../assets/config/configuration.json';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css',
  providers: [DatePipe]
})
export class TravelComponent implements OnInit {

  Destinations: any;
  rajsthanDate: Date;
  SwitzerlandDate: Date;
  ManaliDate: Date;
  currentMonthPlusOne: string;

  constructor(private datePipe: DatePipe) {
    const today = new Date();
    this.rajsthanDate = new Date(today.setDate(today.getDate() + 9));
    this.SwitzerlandDate = new Date(today.setDate(today.getDate() + 18));
    this.ManaliDate = new Date(today.setDate(today.getDate() + 25));

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    this.currentMonthPlusOne = currentDate.toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.Destinations = PopularDestinations.BestDestination;
    const today = new Date();

    // Add 20 days to today's date
    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + 20);
  }

}
