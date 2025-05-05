// lib/validation.ts
interface ValidationResult {
    valid: boolean;
    errors?: Record<string, string>;
  }
  
  interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }

  export function validateContactForm(formData: ContactFormData): ValidationResult {
    const errors: Record<string, string> = {};
    
    if (!formData.name?.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[\d\s+\-()]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject?.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message?.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    return {
      valid: Object.keys(errors).length === 0,
      errors: Object.keys(errors).length > 0 ? errors : undefined
    };
  }