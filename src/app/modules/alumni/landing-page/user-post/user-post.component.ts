import { Component } from '@angular/core';


interface PostInfo{
        user_name: string;
        user_postion: string;
        institution: string;
        user_image: string;
        post_time:string;
        text_message:string;
        image_message: string;
}

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {
  post_id = [1,2,3,4]
  posts: { [id: string]: PostInfo } = { 
    "post_info":{ user_name: "Sinenhlanhla Masuku",
        user_postion: "Web Developer",
        institution: "Tshwane University Of Technology",
        user_image: "assets/Sneh.jpg",
        post_time: "2hr",
        text_message: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
        image_message: "assets/Sneh.jpg"},
   "post_info2":{ user_name: "Thoko Masanabo",
        user_postion: "Fullstack Developer",
        institution: "Tshwane University Of Technology",
        user_image: "assets/Sneh.jpg",
        post_time: "2hr",
        text_message: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
        image_message: "assets/Sneh.jpg"}
         }
}