import { Controller, Get } from "@nestjs/common"

@Controller('/app')//Decorators 
export class AppController {
    @Get('/hi')
    getController(){
        return 'Hi Maggie!'
    }

    @Get('/bye')
    getRoot(){
        return 'Bye Byeeeee!'
    }
}