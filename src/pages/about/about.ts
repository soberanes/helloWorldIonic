import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public peopleService:PeopleServiceProvider) {
        // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(
        //     res => res.json()).subscribe(
        //         data => {
        //             this.posts = data.data.children;
        //         },
        //         err => {
        //             console.log("Oops!");
        //         }
        // );
  }

  ionViewDidLoad() {

    this.peopleService.getUsers()
      .then(data => {
          this.users = data.results;
      })
      .catch(error => {
          console.error(error);
      })
  }

}
