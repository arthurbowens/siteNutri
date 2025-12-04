import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  anoAtual = new Date().getFullYear();

  constructor(private whatsappService: WhatsAppService) {}

  abrirWhatsApp(mensagem: string = '') {
    this.whatsappService.abrirConversa(mensagem);
  }

  scrollParaSecao(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
