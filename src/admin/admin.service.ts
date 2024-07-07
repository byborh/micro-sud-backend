import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminService {
  constructor(private readonly jwtService: JwtService, private readonly authService: AuthService) {}

  private ADMIN = {
    username: 'admin',
    password: 'admin',
  };

  async login(loginDto: any): Promise<any> {
    // Logique de connexion
    if (loginDto.username === this.ADMIN.username && loginDto.password === this.ADMIN.password) {
      // Créer un token / cookie
      const token = this.authService.generateToken(this.ADMIN)
      return {
        access_token: token,
        message: 'Logged in successfully',
      };
    }
    return {
      message: 'Login failed',
    };
  }

  async logout(token: string): Promise<any> {
    if(this.authService.validateToken(token)) {
      this.authService.invalidateToken()
      return {
        message: "Logged out successfully"
      }
    }
    return {
      message: "Invalid token"
    }
  }
}
