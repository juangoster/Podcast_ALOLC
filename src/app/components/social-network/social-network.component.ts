import { Component, OnInit } from '@angular/core';
import {faSpotify} from '@fortawesome/free-brands-svg-icons';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {
  faSpotify = faSpotify
  faTwitterSquare = faTwitterSquare
  faFacebookSquare = faFacebookSquare
  faInstagramSquare = faInstagramSquare
  constructor() { }

  ngOnInit(): void {
  }

}
