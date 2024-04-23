import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  sendEnquiry: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.sendEnquiry = new FormGroup({
      'from-city': new FormControl(['']),
      'to-city': new FormControl(['']),
      'budget': new FormControl(['']),
      'route': new FormControl(['']),
      'from-date': new FormControl(['']),
      'to-date': new FormControl([''])
    });
  }

  SendEnquiry() {
    const formData = this.sendEnquiry.value;
    const message = `From: ${formData['from-city']}
      To: ${formData['to-city']}
      Budget: ${formData['budget']}
      Route: ${formData['route']}
      From Date: ${formData['from-date']}
      To Date: ${formData['to-date']}`;

    const phoneNumber = '9850863649'; // Replace with your actual phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

  }

}
