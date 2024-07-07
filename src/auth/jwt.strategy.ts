import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // Extraction du token depuis l'entête Authorization
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Ne pas ignorer l'expiration du token
      secretOrKey: 'micro-sud', // Utilisation de la même clé secrète que dans le module d'authentification
    });
  }

  async validate(payload: any) {
     // Validation et retour des informations du payload
    return { userId: payload.sub, username: payload.username }
  }
}
