import { Link } from 'react-router-dom'
import { LegalPage } from '../components/LegalPage'

export function DataDeletion() {
  return (
    <LegalPage
      title="Data deletion requests"
      intro={
        <p>
          This page explains how to request deletion of personal data associated
          with your use of our platform.
        </p>
      }
    >
      <section>
        <h2>Business accounts (tenants)</h2>
        <p>
          To request deletion of your organization&apos;s account and related
          data, email{' '}
          <a href="mailto:privacy@byhillside.com">privacy@byhillside.com</a> from
          the address registered on your account. Include your business name and
          the email used to sign in so we can verify your request.
        </p>
        <p>
          We will confirm receipt and process verified deletion requests in line
          with our{' '}
          <Link
            to="/privacy-policy"
            className="font-medium text-ink underline underline-offset-4 hover:text-accent"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>End customers (people who messaged a business)</h2>
        <p>
          If you messaged a business that uses our software, contact that business
          first. You may also email us at{' '}
          <a href="mailto:privacy@byhillside.com">privacy@byhillside.com</a> and we
          will help route or fulfill the request where we are responsible for the
          data.
        </p>
      </section>

      <section>
        <h2>Meta / Facebook / Instagram / WhatsApp Business</h2>
        <p>
          For requests related to data received through Meta products, use the
          subject line <strong>Meta Data Deletion Request</strong> and include
          details needed to locate your records (for example your Page name,
          approximate dates, and your registered account email).
        </p>
      </section>

      <section>
        <p>
          For general privacy questions, see the{' '}
          <Link
            to="/privacy-policy"
            className="font-medium text-ink underline underline-offset-4 hover:text-accent"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  )
}
