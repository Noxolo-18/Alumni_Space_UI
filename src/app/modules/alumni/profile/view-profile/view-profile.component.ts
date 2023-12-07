import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { baseUrl } from 'config';
//import { UserProfileService } from '../user-profile.service';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  private apiUrl = `${baseUrl}/profile`;


  alumni = {
    Name: "name placeholder",
    Location: "location placeholder",
    Qualification: "Qualification placeholder",
    Skills: "Skills placeholder",
    Experience: " Experience placeholder",
    Employment_Status: "Employment_Status placeholder",
    Academic_Transcript: "Academic_Transcript placeholder",
    Interest: "Interest placeholder",
    Bio: "bio placeholder",
    
  }
  //snackbar
  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000, // Duration the snackbar is shown in milliseconds
      verticalPosition: 'top', // Set the vertical position to 'top'
      horizontalPosition: 'center', // Set the horizontal position to 'center'
      panelClass: ['snackbar'], // Add your custom class for styling
    });
  }
  //certificates: string[] =[ 'assets/certificate1.pdf','assets/certificate2.pdf','assets/certifacate3.pdf']; 
  certificates: File[] = [];
 
 certificateNames: string[] =[];
 //academicTranscripts: any[] = ['transcript1','transcript2', 'transcript3'];
 academicTranscripts: File[] = [];
  icounter = 0;

  images: File[] = [];


  constructor(private http: HttpClient, private router: Router, private ProfileService: ProfileService, private sanitizer: DomSanitizer, private snackBar: MatSnackBar) { 
    this.academicTranscripts = this.ProfileService.getDocuments();
    this.certificates = this.ProfileService.getCertificatess();
    this.images = this.ProfileService.getImages();
  }

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    const user_id = localStorage.getItem('account_id');

    console.log('User_id:' + user_id);

    //get profile details from server
    this.http.put(`${this.apiUrl}/get_profile`, { user_id }).subscribe((response: any) => {
      console.log('Data sent to server:', response);

      //this.alumni.Skills = response.userprofile.skills;
      console.log(response.result[0].skills);

      
      //check if values are null
      if (response.result[0].skills === '' || response.result[0].experience === '' || response.result[0].interest === '' || response.result[0].bio === '' ||response.result[0].location === '' ||
      response.result[0].qualification === '' ||response.result[0].employment_status === '') {
        
        this.showSnackbar('Profile Incomplete, Please update profile');
      }

      //display profile
      this.alumni.Skills = response.result[0].skills;
        this.alumni.Experience = response.result[0].experience;
        this.alumni.Interest = response.result[0].interest;
        this.alumni.Bio =  response.result[0].bio;

        this.alumni.Location = response.result[0].location;
        this.alumni.Qualification = response.result[0].qualification;
        this.alumni.Employment_Status = response.result[0].employment_status;
    });



    if (storedName) {
      // Update the 'name' property if 'name' is found in localStorage
      this.alumni.Name = storedName;
    }
  }
  deleteCertificate(index: number){
    // this.certificateNames[i].delete()
    if (index !== -1) {
      this.certificates.splice(index, 1); // Remove the certificate at the specified index
      this.certificateNames.splice(index, 1); // Remove the corresponding name at the same index
      //this.fileTypeError.splice(index, 1); // Remove the error message at the same index
      this.showSnackbar('Certificate deleted successfully!');
    }
  }
  deleteAcademicrecord(index: number){
    if (index !== -1) {
      this.icounter = this.icounter + 1;
      this.academicTranscripts.splice(index, this.icounter); // Remove the academic transcript at the specified index
      this.icounter++;
    //  alert('deleted successfully!')
       this.showSnackbar('Academic Record deleted successfully!');
    }
  }

  viewDocument(document: File) {
    // You can implement document viewing logic here.
    // For simplicity, you can open the document in a new tab.
    const fileURL = URL.createObjectURL(document);
    window.open(fileURL, '_blank');
  }
  getSafeUrl(image: File): SafeUrl {
    const objectURL = URL.createObjectURL(image);
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  returnHome(){
    this.router.navigate(['/alumni/home']);
  }
}
