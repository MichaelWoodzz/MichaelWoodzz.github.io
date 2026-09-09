'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Appearance, grooming, fitness, or style',
  'Dating confidence and social skills',
  'Dating apps, photos, and online presence',
  'A stronger social circle and lifestyle',
  'Going out together and real-time support',
  'Private dinners, parties, and events',
  'Introductions and access to better environments',
  'I am not sure yet',
];

const CONTACT_EMAIL = 'michael@vantagesocal.com';

type FormState = {
  name: string;
  email: string;
  location: string;
  services: string[];
  currentLife: string;
  improvements: string;
  lookingFor: string;
  anythingElse: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  location: '',
  services: [],
  currentLife: '',
  improvements: '',
  lookingFor: '',
  anythingElse: '',
};

export function InquiryForm() {
  const [data, setData] = useState<FormState>(initialState);

  const update = (field: keyof FormState, value: string) => {
    setData((previous) => ({ ...previous, [field]: value }));
  };

  const toggleService = (service: string) => {
    setData((previous) => ({
      ...previous,
      services: previous.services.includes(service)
        ? previous.services.filter((item) => item !== service)
        : [...previous.services, service],
    }));
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailBody = [
      `Full name: ${data.name}`,
      `Email: ${data.email}`,
      `Location: ${data.location}`,
      `Services: ${data.services.join(', ') || 'Not selected'}`,
      `Dating and social life: ${data.currentLife}`,
      `What they want to improve: ${data.improvements}`,
      `What they are looking for: ${data.lookingFor}`,
      `Anything else: ${data.anythingElse || 'No additional notes'}`,
    ].join('\n\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Private advisory application from ${data.name}`,
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <form className="inquiry inquiry-full" onSubmit={handleSubmit}>
      <div className="inquiry-heading">
        <p className="inquiry-kicker">Private and confidential</p>
        <h3>Tell me where you are now and what you want to change.</h3>
        <p>I personally review every application.</p>
      </div>

      <div className="inquiry-grid">
        <div className="inquiry-field">
          <label htmlFor="full-name">Full name</label>
          <input id="full-name" className="inquiry-input" type="text" autoComplete="name" required value={data.name} onChange={(event) => update('name', event.target.value)} />
        </div>
        <div className="inquiry-field">
          <label htmlFor="email">Email address</label>
          <input id="email" className="inquiry-input" type="email" autoComplete="email" required value={data.email} onChange={(event) => update('email', event.target.value)} />
        </div>
        <div className="inquiry-field inquiry-wide">
          <label htmlFor="location">Where are you located?</label>
          <input id="location" className="inquiry-input" type="text" autoComplete="address-level2" placeholder="City and neighborhood" required value={data.location} onChange={(event) => update('location', event.target.value)} />
        </div>

        <fieldset className="inquiry-field inquiry-wide inquiry-services">
          <legend>What services do you think you need?</legend>
          <p className="inquiry-help">Select as many as you like. It is completely fine if you are unsure.</p>
          <div className="inquiry-checks">
            {SERVICE_OPTIONS.map((service) => (
              <label key={service} className={data.services.includes(service) ? 'inquiry-check active' : 'inquiry-check'}>
                <input type="checkbox" checked={data.services.includes(service)} onChange={() => toggleService(service)} />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="inquiry-field inquiry-wide">
          <label htmlFor="current-life">Tell me about your dating and social life right now.</label>
          <textarea id="current-life" className="inquiry-textarea" rows={4} required placeholder="What is working, what is not, and what does a normal week look like?" value={data.currentLife} onChange={(event) => update('currentLife', event.target.value)} />
        </div>
        <div className="inquiry-field inquiry-wide">
          <label htmlFor="improvements">What would you most like to improve?</label>
          <textarea id="improvements" className="inquiry-textarea" rows={3} required placeholder="Appearance, confidence, dating, friendships, lifestyle, social access, or anything else" value={data.improvements} onChange={(event) => update('improvements', event.target.value)} />
        </div>
        <div className="inquiry-field inquiry-wide">
          <label htmlFor="looking-for">What are you looking for?</label>
          <textarea id="looking-for" className="inquiry-textarea" rows={3} required placeholder="Describe the dating life, relationships, friendships, and lifestyle you want" value={data.lookingFor} onChange={(event) => update('lookingFor', event.target.value)} />
        </div>
        <div className="inquiry-field inquiry-wide">
          <label htmlFor="anything-else">Anything else you want me to know? <span>(optional)</span></label>
          <textarea id="anything-else" className="inquiry-textarea" rows={3} value={data.anythingElse} onChange={(event) => update('anythingElse', event.target.value)} />
        </div>
      </div>

      <button className="primary-link inquiry-submit" type="submit">
        Apply for Private Advisory <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="inquiry-hint">This opens your email app with your private application ready to send.</p>
    </form>
  );
}
