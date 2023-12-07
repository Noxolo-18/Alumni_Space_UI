// Add this interface definition at the beginning of your file or in a separate file (e.g., alumni.model.ts)
interface Profile {
  account_id: number;
  name: string;
  surname: string;
  location: string;
  qualification: string;
  skills: string;
  experience: string;
  employment_status: string;
  pic_file: string;
  alumni_Networks: number;
}

// Then, in your track-alumni.component.ts file
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProfileService } from '../../alumni/profile/profile.service'; // Adjust the path based on your project structure
import { HttpClient } from '@angular/common/http';
import { imageUrl } from 'config';

@Component({
  selector: 'app-track-alumni',
  templateUrl: './track-alumni.component.html',
  styleUrls: ['./track-alumni.component.css']
})
export class TrackAlumniComponent implements OnInit {
  displayedColumns: string[] = ['alumni_Id', 'alumniName', 'location', 'qualification', 'skills', 'experience', 'employment_Status', 'alumniPicture', 'alumni_Networks'];
  dataSource: any[] = [];

  showAlumniTable: boolean = false;
  showAlumniStats: boolean = false;

  constructor(private apiService: ProfileService, private http: HttpClient) {}

  ngOnInit(): void {
    this.apiService.getProfiles().subscribe((data: any) => {
      if (data && data.profiles) {
        this.dataSource = data.profiles.map((profile: Profile) => ({
          account_id: profile.account_id,
          alumniName: `${profile.name} ${profile.surname}`,
          location: profile.location,
          qualification: profile.qualification,
          skills: profile.skills,
          experience: profile.experience,
          employment_Status: profile.employment_status,
          alumniPicture: this.getAlumniPicturePath(profile.pic_file),
          alumni_Networks: profile.alumni_Networks
        }));
      }
    });
  }

  toggleAlumniTable() {
    this.showAlumniTable = !this.showAlumniTable;
  }

  toggleAlumniStatsChart() {
    this.showAlumniStats = !this.showAlumniStats;
  }



  imageUrl = `${imageUrl}/uploads/pics/profiles`

  getAlumniPicturePath(picFile: string): string {

    const defaultPicture = 'default-avatar.jpg';

    //return `${this.imageUrl}/${picFile}`;

    if (picFile && picFile.trim() !== '') {
      return `${this.imageUrl}/${picFile}`;
    } else {
      return `${this.imageUrl}/${defaultPicture}`;
    }
  }
}
