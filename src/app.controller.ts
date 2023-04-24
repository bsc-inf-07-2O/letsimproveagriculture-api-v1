// Importing the Controller and Get decorators from the Nest.js common module.
import { Controller, Get } from '@nestjs/common';
// Importing the AppService class from the app.service.ts file in the same directory.
import { AppService } from './app.service';

// The constructor function of the AppController class injects an instance of the AppService class.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Defining a GET route handler for the root path ('/') using the Get decorator.
  @Get() // Defining a GET route handler for the root path ('/') using the Get decorator.
   getHello(): string { // Defining the getHello() method of the AppController class, which returns a string.
    return this.appService.getHello(); // Returning the result of calling the getHello() method of the injected AppService instance.
  }
}
