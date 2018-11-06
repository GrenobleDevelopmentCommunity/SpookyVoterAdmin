import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../_model/user';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  user: User = {
    nickname: '',
    category: ''
  };

  acceptedMimeTypes = [
    'image/gif',
    'image/jpeg',
    'image/png'
  ];

  @ViewChild('fileInput') fileInput: ElementRef;
  fileDataUri = '';
  errorMsg = '';

  userCreated = false;

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  previewFile() {
    const file = this.fileInput.nativeElement.files[0];
    if (file && this.validateFile(file)) {

      const reader = new FileReader();
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
      reader.onload = () => {
        this.fileDataUri = reader.result as string;
      };
    } else {
      this.errorMsg = 'File must be jpg, png, or gif and cannot be exceed 500 KB in size'
    }
  }

  uploadFile() {
    if (this.fileDataUri.length > 0) {
      const base64File = this.fileDataUri.split(',')[1];
      this.userService.uploadPhoto(this.user.nickname, base64File).subscribe((res) => {
        console.log('UploadPhotoRes', res);
        this.userService.createUser(this.user).subscribe( (usRes) => {
          console.log('CreateUserRes', usRes);
          this.userCreated = true;
        });
      });

    }
  }

  validateFile(file) {
    return this.acceptedMimeTypes.includes(file.type);
  }

}
