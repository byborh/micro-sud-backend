import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private currentToken: string | null = null // Stockage du token actuel

  constructor(private readonly jwtService: JwtService) {}

  validateToken(token: string): boolean {
    if(this.currentToken !== token) return false // Vérifie si le token est le token actuel
    try {
      const decoded = this.jwtService.verify(token, { secret: 'micro-sud' });
      return !!decoded; // Retourne vrai si le token est valide
    } catch (e) {
      return false; // Retourne faux si le token n'est pas valide
    }
  }

  generateToken(payload: any): string {
    this.currentToken = this.jwtService.sign(payload)
    return this.currentToken // Génération d'un token JWT
  }

  // Invalidation du token
  invalidateToken(): void {this.currentToken = null}
}
