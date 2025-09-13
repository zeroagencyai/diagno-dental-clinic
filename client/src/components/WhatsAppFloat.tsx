import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Calendar, FileText, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { openWhatsApp, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = (message?: string) => {
    openWhatsApp(message);
    setIsExpanded(false);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Chat Box */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-border w-80 animate-in slide-in-from-bottom-2">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Diagno</h4>
                <p className="text-sm text-muted-foreground">Online agora</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggle}
              className="h-8 w-8"
              data-testid="button-close-chat"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="p-4">
            <div className="bg-muted rounded-lg p-3 mb-3">
              <p className="text-sm text-foreground">
                Olá! Como podemos ajudá-lo hoje?
              </p>
            </div>
            
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.schedule)}
                data-testid="button-schedule-exam"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar exame
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.results)}
                data-testid="button-check-results"
              >
                <FileText className="w-4 h-4 mr-2" />
                Consultar resultados
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start text-left"
                onClick={() => handleWhatsAppClick(WHATSAPP_MESSAGES.questions)}
                data-testid="button-get-info"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Tirar dúvidas
              </Button>
            </div>
            
            <Button
              className="w-full mt-3"
              style={{backgroundColor: 'rgb(34 197 94)', color: 'white'}}
              onClick={() => handleWhatsAppClick()}
              data-testid="button-whatsapp-main"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Abrir WhatsApp
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg"
        style={{backgroundColor: 'rgb(34 197 94)', color: 'white'}}
        onClick={handleToggle}
        data-testid="button-whatsapp-float"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}