"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), { headers: headers })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "oauth/token", JSON.stringify({
            username: user.email,
            password: user.password,
            grant_type: "password"
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQXNEO0FBQ3RELDhCQUFtQztBQUNuQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRy9CLG9DQUFpQztBQUdqQyxJQUFhLFdBQVc7SUFDcEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxFQUNGLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNyQjthQUNJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsVUFBVTtTQUN6QixDQUFDLEVBQ0YsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQ3JCO2FBQ0ksR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ0osZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUM1QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVpQixXQUFJO0dBRHJCLFdBQVcsQ0E0Q3ZCO0FBNUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwiVXNlcnNcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBFbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBQYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7aGVhZGVyczogaGVhZGVyc31cbiAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcjogVXNlcikge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJvYXV0aC90b2tlblwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGdyYW50X3R5cGU6IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7aGVhZGVyczogaGVhZGVyc31cbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuZG8oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgQ29uZmlnLnRva2VuID0gZGF0YS5SZXN1bHQuYWNjZXNzX3Rva2VuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxufSJdfQ==