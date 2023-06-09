# Table Of Contents
- [SkyLight](#skylight)
- [Technologies](#technologies)
- [Features](#features)
- [Run Application](#run-application)
- [Approach](#approach)
- [Acknowledgements](#acknowledgements)

# SkyLight
Time to put on your wing cap, or ride on the Millenium Falcon, or even hop onboard on a GoodYear blimp! SkyLight is here to introduce a fly-share service where users can request flights or even become a pilot themselves. The hassling life of an airport will soon be a thing of the past. No need to worry about being stranded in the airport for hours from a cancelled flight, be caught in an overcrowded plane, or see the same sights over and over again. Revolutionize the way we fly by flying through your convinience. 

Be sure to look through the [Backend Repo](https://github.com/dayjyun/skylight-backend) for a more technical view

# Technologies
- [AngularJs](https://angularjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [BootStrap](https://getbootstrap.com/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [VSCode](https://code.visualstudio.com/)
- Git Branching
- [Icons8](https://icons8.com/)
- [FontAwesome](https://fontawesome.com/)
- [AWS](https://aws.amazon.com/)
- [H2 DataBase](http://h2database.com/html/main.html)
- [Google Maps API](https://developers.google.com/)
- [Google Chrome](https://www.google.com/chrome/bsem/download/en_us/?brand=VDKB&ds_kid=43700052784036214&gclid=625869fee86717a6d6380d7c374ebe7e&gclsrc=3p.ds&utm_source=bing&utm_medium=cpc&utm_campaign=1605158%20%7C%20Chrome%20Win11%20%7C%20DR%20%7C%20ESS01%20%7C%20NA%20%7C%20US%20%7C%20en%20%7C%20Desk%20%7C%20SEM%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20%7C%20Bing_Top%20KWDS&utm_term=google%20chrome&utm_content=Desk%20%7C%20BKWS%20-%20EXA%20%7C%20Txt_Google%20Chrome_Top%20KWDS&gclid=625869fee86717a6d6380d7c374ebe7e&gclsrc=3p.ds)
- [WireframePro](https://workspace.google.com/marketplace/app/wireframepro/413107853716)

# Features
- User Registration and Login: Users can create an account on Skylight Airways by registering with their personal details. Once registered, users can log in to their accounts to access personalized features.
- User Profile Management: Users have access to a personalized profile where they can view and edit their account information, ensuring their details are up-to-date.
- Flight Tracking: Users have the convenience of accessing a list of flights they have booked, allowing them to easily track and manage their travel plans.
- Pilot Request Submission: Aspiring pilots can submit a request through the website, expressing their interest in becoming pilots and starting their journey towards achieving their dream.
- Airport Information: Users can explore comprehensive information about various airports, including location, city, and coordinates. They can also search for airports based on their unique airport codes.
- Live Google Maps rendering feature to dynamically display the locations of airports. This enhancement allows users to visualize the precise geographical positions of airports in real-time.
- User Authentication and Security: Certain functionalities and features require users to be authenticated and logged in to access them, ensuring privacy and security of sensitive information.


# Run Applicatoin
Simply clone the application and run it on your preferred JavaScript environment. In your command line, go to the root of the folder and type `ng serve --open`. The terminal will open your default broswer and navigate you to _localhost:4200_. Once you're on the main page, sign up for an account, and you're all set!

**CAUTION** Be sure to have both the [backend](https://github.com/dayjyun/skylight-backend) and frontend (this project) running at the same time!

# Approach
The primary goal was to create a functional and visually appealing website, incorporating both aesthetics and functionality. To streamline the development process, I leveraged Bootstrap, which greatly facilitated my experience with CSS. This framework proved invaluable in handling major components, such as effortlessly implementing an image carousel, building a user-friendly search bar for browsing through airports, and swiftly developing ready-to-use card components.
[user stories](https://github.com/dayjyun/skylight-backend/wiki/SkyLight)
[Kanban board](https://github.com/users/dayjyun/projects/8/views/1)

The planning underwent several updates and refinements throughout the process...

<img src="https://skylight-project.s3.amazonaws.com/frontend/wf-main-page.png" width="400" alt="Flight Details Image">
<img src="https://skylight-project.s3.amazonaws.com/frontend/main-page.png" width="400" alt="Flight Details Image">
<img src="https://skylight-project.s3.amazonaws.com/frontend/wf-flights.png" width="400" alt="Flight Details Image">
<img src="https://skylight-project.s3.amazonaws.com/frontend/airports-list.png" width="400" alt="Flight Details Image">

Overall, one of the more difficult sections that I challenged myself in was by creating a Google Map render on the page. It has live rendering that will dynamically display the location of each airport based on its coordinates. While it may seem a bit challenging at first, I wasn't completely _lost_...
```
/**
   * Loads the Google Maps library and initializes the map.
   */
  loadMapsLibrary(): void {
    if (!this.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.onload = () => {
        this.google = google;
        this.initMap();
      };
      document.body.appendChild(script);
    } else {
      this.initMap();
    }
  }

  /**
   * Initializes the Google Map with the airport's location.
   */
  initMap(): void {
    const mapOptions = {
      center: { lat: +this.airport.latitude, lng: +this.airport.longitude },
      zoom: 12,
      disableDefaultUI: true, // Optional: Disable default map UI
    };

    const map = new this.google.maps.Map(
      this.mapContainer.nativeElement,
      mapOptions
    );

    const marker = new this.google.maps.Marker({
      position: { lat: +this.airport.latitude, lng: +this.airport.longitude },
      map: map,
    });
  }
```
I had confidence I would eventually find my way.

# Acknowledgements
Many thanks to [Suresh Sigera](https://github.com/sureshmelvinsigera), [Jaime Padilla](https://github.com/Jaypad07), [Kim Nguyen](https://github.com/knnguyen2410), [Dominique Akers](https://github.com/Dommy99), [Jeff Ou](https://github.com/pophero110), and [Edgar Zambrana](https://github.com/EdgarJoell) for providing feedback, helpful code, and overall, an enjoyable time during the random times a conversation would strike up.

A sincere and full-hearted appreciation to [Maksym Zinchenko](https://github.com/maklaut007). His understaning with Angular helped elevate the project to where it is today. With his patience in teaching and debugging, there's no doubt that Maks is a reliable source and a wonderful developer to work with.
