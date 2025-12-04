import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private whatsappService: WhatsAppService) {}

  abrirWhatsApp(mensagem: string) {
    this.whatsappService.abrirConversa(mensagem);
  }
}
