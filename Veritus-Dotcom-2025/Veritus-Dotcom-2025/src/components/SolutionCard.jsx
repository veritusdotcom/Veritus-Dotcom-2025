import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SolutionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features = [],
  image,
  href,
  className = "",
  ...props 
}) => {
  return (
    <Card className={`overflow-hidden hover-lift bg-white border border-border ${className}`} {...props}>
      {/* Image */}
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* CTA */}
        {href && (
          <div className="pt-2">
            <Button asChild variant="outline" className="group">
              <Link to={href}>
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default SolutionCard;

