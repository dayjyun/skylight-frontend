import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  // Two-way binding with the search input
  originSearchBarText: string = '';
  destinationSearchBarText: string = '';
  // Holds filtered results for origin airports
  filteredOriginAirports: any[] = [];
  // Holds filtered results for destination airports
  filteredDestinationAirports: any[] = [];
  // private posts = this.postsService.getPosts();

  constructor(/* service*/ ) {}

  // filterPosts() {
  //   // Assigns the filteredPosts array with the filtered results from the user's input made in the two-way binding through the searchBarText initializing
  //   this.filteredPosts = this.searchBarText
  //     ? // filter through the list of posts in our database and return search results by the title of the post from the searchBarText value
  //       this.posts.filter(
  //         (post) =>
  //           // compare the user's input values without worrying about what case is entered in the search box
  //           post.title.toLowerCase().includes(this.searchBarText.toLowerCase())
  //         // returns an empty array if there are no posts to filter through in the database
  //       )
  //     : [];
  // }

  // Submission for "Let's Go"
  search() {
    this.clearSearchBar();
  }

  // Clears search bar text after a user clicks on "Let's Go" button
  clearSearchBar() {
    this.originSearchBarText = '';
    this.destinationSearchBarText = '';
  }
}
