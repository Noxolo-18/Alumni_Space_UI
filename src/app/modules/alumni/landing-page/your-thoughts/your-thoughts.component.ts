import { Component } from '@angular/core';

@Component({
  selector: 'app-your-thoughts',
  templateUrl: './your-thoughts.component.html',
  styleUrls: ['./your-thoughts.component.css']
})
export class YourThoughtsComponent {
  
  postedtext: string=''; 

  onPhotoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected photo file
  
    if (file) {
      // Handle the photo file upload here
      // You might want to handle the file upload using a service or any other logic specific to your application
      // For example:
      // this.yourService.uploadPhoto(file);
      // where file is the image file
      // Make sure to replace 'yourService' with your actual service
    }
  }

  onVideoUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected video file

    if (file) {
      // Handle the video file upload here
      // You might want to handle the file upload using a service or any other logic specific to your application
      // For example:
      // this.yourService.uploadVideo(file);
      // where file is the video file
      // Make sure to replace 'yourService' with your actual service
    }
  }
  onMediaUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0]; // Get the selected video file

    if (file) {
      // Handle the video file upload here
      // You might want to handle the file upload using a service or any other logic specific to your application
      // For example:
      // this.yourService.uploadVideo(file);
      // where file is the video file
      // Make sure to replace 'yourService' with your actual service
    }
  }
  data = [
    { user: 'User 1', query: 'Hello, I have a question.', status: 'Unanswered', response: '' },
    { user: 'User 2', query: 'Need assistance with an order.', status: 'Unanswered', response: '' }
  ];
  responseForms: boolean[] = new Array(this.data.length).fill(false);

  toggleResponseForm(index: number) {
    this.responseForms[index] = !this.responseForms[index];
  }

  submitResponse(index: number) {
    this.data[index].status = 'Answered';
    this.responseForms[index] = false;

    // this.postedtext.style.color='red';

    alert( this.postedtext)
  }
}

