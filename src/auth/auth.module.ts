import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'micro-sud', // Utilisation d'une clé secrète sécurisée
      signOptions: { expiresIn: '60m' }, // Durée de validité du token
    }),
  ],
  providers: [AuthService, JwtStrategy], // Fournit le service d'authentification et la stratégie JWT
  exports: [AuthService, JwtModule], // Exporte le service d'authentification pour être utilisé ailleurs
})
export class AuthModule {}
