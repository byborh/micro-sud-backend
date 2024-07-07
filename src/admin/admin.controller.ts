import { Controller, Post, Body, UseGuards, Query } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  
  @Post('login')
  async login(@Body() LoginDto: any): Promise<any> {
    return this.adminService.login(LoginDto)
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async logout(@Query('token') token: string): Promise<any> {
    return this.adminService.logout(token)
  }
}
