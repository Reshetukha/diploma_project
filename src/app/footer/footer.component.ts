import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  closeResult: string;
  subscriptionField: string;

  subscriptions: string[];

  ngOnInit() {
    this.subscriptionField = '';
    this.subscriptions = [];
  }

  open(content) {
    if ( this.subscriptionField !== '' ) {
      this.modalService.open(content).result.then((result) => {
        console.log('close button');
        this.addSubscription();
      }, (reason) => {
        console.log('dismiss');
        this.addSubscription();
      });
    }
  }

  addSubscription(): void {
    this.subscriptions.push(this.subscriptionField);
    this.subscriptionField = '';
    console.log(this.subscriptions);
  }

}
