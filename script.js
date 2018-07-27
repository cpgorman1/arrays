$(document).ready(function(){ 

	var array_score = [1200, 990, 1010, 1300, 1230];


	for (var i=0; i<array_score.length; i++) {
		console.log(array_score);
		$(#score).append("<p>" + array_score + "<p>");
	}

using System;   
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        const string accountSid = "ACc42b1b868aa139951d3c3d4a8d78c034";
        const string authToken = "your_auth_token";

        TwilioClient.Init(accountSid, authToken);

        var message = MessageResource.Create(
            from: new Twilio.Types.PhoneNumber("+15017122661"),
            body: "Body",
            to: new Twilio.Types.PhoneNumber("+15017122661")
        );

        Console.WriteLine(message.Sid);
    }
}


});



