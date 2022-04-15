import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"],
})
export class SubscribeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  subscribeForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),

    email: new FormControl("", [
      Validators.email,
      Validators.required,
      Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
    ]),
    designation: new FormControl("", [Validators.required]),
    organizationName: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    state: new FormControl("", [Validators.required]),
    zipCode: new FormControl("", [Validators.required]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$"
      ),
    ]),
  });

  onSubmit(data: any) {
    console.log(data);
    this.subscribeForm.reset()
  }
}
