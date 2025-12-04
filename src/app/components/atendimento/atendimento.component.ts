import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atendimento.component.html',
  styleUrl: './atendimento.component.scss'
})
export class AtendimentoComponent {
  constructor(private whatsappService: WhatsAppService) {}

  abrirWhatsApp(mensagem: string) {
    this.whatsappService.abrirConversa(mensagem);
  }
}
