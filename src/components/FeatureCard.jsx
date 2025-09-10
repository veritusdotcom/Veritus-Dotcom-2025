import { Card } from '@/components/ui/card';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className = "",
  iconColor = "text-primary",
  ...props 
}) => {
  return (
    <Card className={`p-6 hover-lift bg-white border border-border ${className}`} {...props}>
      <div className="space-y-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;

