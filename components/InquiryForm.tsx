'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

const AREA_OPTIONS = ['Los Angeles', 'Orange County', 'Ventura County', 'Other Southern California'];

const SITUATION_OPTIONS = [
  'My personal life has not kept pace with my career',
  'I want to improve my appearance and presence',
  'I need a stronger social circle and lifestyle',
  'Dating apps and my current strategy are not working',
  'I am navigating a major life transition',
  'I want a comprehensive assessment',
];

const FOCUS_OPTIONS = [
  'Appearance, physique, grooming & style',
  'Dating strategy, confidence & communication',
  'Social circle, lifestyle & organic introductions',
  'Hands-on outings & real-time support',
  'Private events & hosting',
  'The full advisory — help me set priorities',
];

const TOTAL_STEPS = 6;
const CONTACT_EMAIL = 'michael@vantagesocal.com';

type FormState = {
  name: string;
  email: string;
  area: string;
  situation: string;
  focus: string;
  notes: string;
};

const initialState: FormState = { name: '', email: '', area: '', situation: '', focus: '', notes: '' };

export function InquiryForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initialState);

  const update = (field: keyof FormState, value: string) => setData((prev) => ({ ...prev, [field]: value }));

  const goNext = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const selectAndAdvance = (field: keyof FormState, value: string) => {
    update(field, value);
    goNext();
  };

  const canProceedStep1 = data.name.trim().length > 0 && /\S+@\S+\.\S+/.test(data.email);

  const emailBody = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Area: ${data.area}`,
    `Situation: ${data.situation}`,
    `Focus: ${data.focus}`,
    data.notes ? `Notes: ${data.notes}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Private advisory application from ${data.name || 'the Vantage SoCal site'}`,
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="inquiry">
      <div className="inquiry-progress" aria-hidden="true">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <span key={i} className={i < step ? 'inquiry-dot active' : 'inquiry-dot'} />
        ))}
      </div>

      {step === 1 && (
        <div className="inquiry-step">
          <p className="inquiry-question">Apply for Private Advisory</p>
          <div className="inquiry-fields">
            <input
              className="inquiry-input"
              type="text"
              placeholder="Your name"
              value={data.name}
              onChange={(e) => update('name', e.target.value)}
              aria-label="Your name"
            />
            <input
              className="inquiry-input"
              type="email"
              placeholder="Your email"
              value={data.email}
              onChange={(e) => update('email', e.target.value)}
              aria-label="Your email"
            />
          </div>
          <button type="button" className="primary-link inquiry-next" disabled={!canProceedStep1} onClick={goNext}>
            Continue <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="inquiry-step">
          <p className="inquiry-question">Where are you based?</p>
          <div className="inquiry-choices">
            {AREA_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={data.area === option ? 'inquiry-choice active' : 'inquiry-choice'}
                onClick={() => selectAndAdvance('area', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="inquiry-step">
          <p className="inquiry-question">What best describes where you&apos;re at?</p>
          <div className="inquiry-choices">
            {SITUATION_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={data.situation === option ? 'inquiry-choice active' : 'inquiry-choice'}
                onClick={() => selectAndAdvance('situation', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="inquiry-step">
          <p className="inquiry-question">What do you want to focus on first?</p>
          <div className="inquiry-choices">
            {FOCUS_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={data.focus === option ? 'inquiry-choice active' : 'inquiry-choice'}
                onClick={() => selectAndAdvance('focus', option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="inquiry-step">
          <p className="inquiry-question">
            Anything else you&apos;d like us to know? <span className="inquiry-optional">(optional)</span>
          </p>
          <textarea
            className="inquiry-textarea"
            rows={4}
            placeholder="Share anything that would help us understand your situation…"
            value={data.notes}
            onChange={(e) => update('notes', e.target.value)}
          />
          <button type="button" className="primary-link inquiry-next" onClick={goNext}>
            Continue <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      {step === 6 && (
        <div className="inquiry-step">
          <p className="inquiry-question">Review your private application.</p>
          <dl className="inquiry-summary">
            <div>
              <dt>Name</dt>
              <dd>{data.name}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{data.email}</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>{data.area}</dd>
            </div>
            <div>
              <dt>Situation</dt>
              <dd>{data.situation}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{data.focus}</dd>
            </div>
            {data.notes && (
              <div>
                <dt>Notes</dt>
                <dd>{data.notes}</dd>
              </div>
            )}
          </dl>
          <a className="primary-link inquiry-next" href={mailtoHref}>
            Apply for Private Advisory <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="inquiry-hint">This opens your email app with everything filled in — just hit send.</p>
        </div>
      )}

      {step > 1 && (
        <button type="button" className="inquiry-back" onClick={goBack}>
          <ArrowLeft size={14} aria-hidden="true" /> Back
        </button>
      )}
    </div>
  );
}
