import {Color} from "color";
import {View} from "ui/core/view";
import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Page} from "ui/page";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";

@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl: "pages/login/login.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    ngOnInit(): void {
        //this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_new";
    }
    
    user: User;
    isLoggingIn = true;
    @ViewChild("container") container: ElementRef;

    constructor(private page: Page, private router: Router, private userService: UserService) {
        this.user = new User();
        this.user.email = "";
        this.user.password = "";
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
            );
    }

    pass() {
        console.log("PASSWORD");
        this.router.navigate(["/pass"]);
    }

    register() {
        console.log("REGISTER");
        this.router.navigate(["/register"]);
    }

    submit() {
        alert("You’re using: " + this.user.email);
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }

    showTabView() {
        console.log("TABS");
        this.router.navigate(["/tabs"]);
    }

    
}