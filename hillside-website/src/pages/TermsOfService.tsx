import { LegalPage } from '../components/LegalPage'

export function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={
        <>
          <p className="text-ink">
            <strong>Effective Date:</strong> April 14, 2026
            <br />
            <strong>Last Updated:</strong> April 21, 2026
          </p>
          <p className="mt-6">
            These Terms of Service (&quot;Terms&quot;) constitute a legally
            binding agreement between Hillside L.L.C. (&quot;Hillside&quot;,
            &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
            a limited liability company registered in Kosovo, and the business
            entity or individual (&quot;Customer&quot;, &quot;you&quot;, or
            &quot;your&quot;) that creates an account or accesses the Hillside
            platform. By registering an account, clicking &quot;I agree&quot;, or
            otherwise accessing or using the platform, you represent that you have
            read, understood, and agree to be bound by these Terms. If you do not
            agree to these Terms, you must not access or use the platform.
          </p>
        </>
      }
    >
      <section>
        <h2>1. Platform Description and Scope</h2>
        <p>
          Hillside provides a cloud-based AI-powered messaging and sales automation
          platform (the &quot;Platform&quot;) that enables businesses to manage
          customer communications through connected social and messaging channels,
          including Facebook, Instagram, and WhatsApp Business. The Platform
          includes, without limitation: AI-generated reply assistance, inbox
          management, order workflow automation, product catalog management,
          analytics, and channel integration tooling.
        </p>
        <p>
          These Terms govern all access to and use of the Platform, including any
          software, APIs, documentation, and support services made available by
          Hillside in connection therewith.
        </p>
      </section>

      <section>
        <h2>2. Eligibility and Account Registration</h2>

        <h3>2.1 Eligibility Requirements</h3>
        <p>To access the Platform, you must:</p>
        <ul>
          <li>be at least 18 years of age;</li>
          <li>
            be duly authorized to act on behalf of your business entity and bind it
            to these Terms;
          </li>
          <li>provide accurate, complete, and current registration information; and</li>
          <li>
            operate a legitimate business with a lawful use case compatible with the
            Platform&apos;s intended purpose.
          </li>
        </ul>

        <h3>2.2 Account Security</h3>
        <p>
          You are solely responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your account.
          You must:
        </p>
        <ul>
          <li>
            use strong, unique credentials and enable any available multi-factor
            authentication;
          </li>
          <li>restrict access to authorized personnel only; and</li>
          <li>
            notify us immediately at{' '}
            <a href="mailto:support@byhillside.com">support@byhillside.com</a> if
            you know or reasonably suspect unauthorized access to your account or
            credentials.
          </li>
        </ul>
        <p>
          Hillside shall not be liable for losses resulting from unauthorized
          account access caused by your failure to maintain adequate credential
          security.
        </p>
      </section>

      <section>
        <h2>3. Permitted Use and Acceptable Use Policy</h2>

        <h3>3.1 Permitted Use</h3>
        <p>
          You may use the Platform solely for lawful business purposes in accordance
          with these Terms, our documentation, applicable law, and the terms and
          policies of any third-party platforms to which you connect (including Meta
          Platform Terms and Developer Policies).
        </p>

        <h3>3.2 Prohibited Conduct</h3>
        <p>You must not use the Platform, directly or indirectly, to:</p>
        <ul>
          <li>
            send unsolicited commercial messages (spam), bulk promotional content
            without prior explicit consent, or communications that violate applicable
            anti-spam, electronic marketing, or consumer protection laws;
          </li>
          <li>harass, threaten, deceive, defame, or abuse any person or entity;</li>
          <li>impersonate any individual, organization, or Meta platform entity;</li>
          <li>transmit or store unlawful, harmful, obscene, or infringing content;</li>
          <li>attempt to gain unauthorized access to any system, account, or data;</li>
          <li>
            use automated scripts, scraping tools, bots, or crawlers to interact with
            the Platform infrastructure in ways not expressly permitted by our
            documentation;
          </li>
          <li>
            reverse-engineer, decompile, disassemble, or otherwise attempt to derive
            the source code or underlying algorithms of the Platform;
          </li>
          <li>
            sublicense, resell, or commercially redistribute access to the Platform
            without our prior written consent;
          </li>
          <li>
            circumvent, disable, or interfere with security controls, rate limits, or
            technical restrictions of the Platform or any connected third-party
            platform;
          </li>
          <li>
            exceed messaging rate limits or use the Platform in a manner that degrades
            service for other users or violates Meta platform messaging policies; or
          </li>
          <li>
            use the Platform in any manner that could expose Hillside to legal
            liability or damage its relationship with third-party platform providers,
            including Meta.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Meta Platform Integrations</h2>

        <h3>4.1 Scope of Meta Integrations</h3>
        <p>
          The Platform integrates with Meta Platforms, Inc. (&quot;Meta&quot;)
          services including the Facebook Graph API, Instagram Graph API, Instagram
          Login, and the WhatsApp Business Platform (Cloud API) (collectively,
          &quot;Meta Platforms&quot;). Each integration is authorized and operates
          independently, as follows:
        </p>
        <ul>
          <li>
            <strong>Facebook Page connection:</strong> Authorizes the Platform to
            send and receive messages through your Facebook Page inbox.
          </li>
          <li>
            <strong>Instagram integration:</strong> May be authorized via Facebook
            Page permissions or independently through Instagram Login, subject to
            Meta account configuration and applicable permissions.
          </li>
          <li>
            <strong>WhatsApp Business Platform (Cloud API):</strong> A distinct
            integration requiring separate authorization. WhatsApp Business
            functionality, permissions, and data flows are governed independently from
            your Facebook and Instagram connections.
          </li>
        </ul>
        <p>
          Connecting one Meta channel does not automatically grant access to other
          channels. Each channel must be independently authorized by you through the
          Platform&apos;s integration settings.
        </p>

        <h3>4.2 Your Compliance Obligations</h3>
        <p>
          Your use of Meta integrations is subject to Meta&apos;s then-current
          Platform Terms, Developer Policies, Business Terms, WhatsApp Business
          Policy, and Messaging Policies (collectively, &quot;Meta Policies&quot;),
          which are incorporated herein by reference. You are solely responsible for:
        </p>
        <ul>
          <li>
            ensuring your use case, content, and messaging practices comply with all
            applicable Meta Policies;
          </li>
          <li>
            obtaining all required consents from end users prior to initiating or
            automating communications through Meta channels;
          </li>
          <li>
            ensuring that automated or AI-generated messages comply with Meta&apos;s
            policies on automation, user initiation requirements, and prohibited
            content;
          </li>
          <li>
            maintaining compliance with WhatsApp Business Platform messaging rules,
            including approved message template usage, opt-in requirements, and the
            prohibition on unsolicited promotional messaging outside permitted
            windows; and
          </li>
          <li>
            promptly adapting your use of the Platform in response to changes to Meta
            Policies or API capabilities that affect permitted use.
          </li>
        </ul>

        <h3>4.3 Meta Platform Data</h3>
        <p>
          As defined in Meta&apos;s Platform Terms, &quot;Meta Platform Data&quot;
          means any data or content obtained from Meta&apos;s platforms or through
          use of Meta&apos;s APIs. You acknowledge and agree that:
        </p>
        <ul>
          <li>
            Meta Platform Data obtained through the Platform may only be used for the
            specific permitted purpose for which it was obtained—namely, providing
            messaging, customer support, and sales automation services to your
            business;
          </li>
          <li>
            you must not use Meta Platform Data for purposes unrelated to the user
            interaction through which it was collected, including but not limited to:
            advertising unrelated to the originating interaction, cross-business
            profiling, surveillance, credit scoring, or resale to any third party;
          </li>
          <li>
            you must not combine Meta Platform Data with data from other sources to
            build independent user profiles or for purposes inconsistent with Meta
            Platform Terms; and
          </li>
          <li>
            any automated messaging through Meta channels must be user-initiated or
            explicitly configured and authorized by you as the business operator, and
            must not constitute autonomous outbound spam or unsolicited bulk
            communications.
          </li>
        </ul>
        <p>
          Hillside does not use Meta Platform Data to train general-purpose or
          unrelated machine learning models; Hillside processes Meta Platform Data only
          to provide the Platform and for improvements permitted under Meta Policies
          and Hillside&apos;s agreements with subprocessors, as further described in
          the Privacy Policy.
        </p>
        <p>
          <strong className="text-ink">Note:</strong> Hillside acts solely as a data
          processor with respect to Meta Platform Data and processes such data
          exclusively on your behalf and under your instructions. See Section 7 for
          full data processing terms.
        </p>

        <h3>4.4 API Changes and Service Continuity</h3>
        <p>
          Meta may modify, restrict, or deprecate APIs, permissions, or platform
          features at any time without notice to Hillside. If Meta changes its APIs
          or policies in a manner that requires modifications to the Platform or its
          integration behavior, you agree to cooperate with reasonable implementation
          changes necessary to maintain compliance and service continuity. Hillside
          shall not be liable for service interruptions or reduced functionality
          arising from Meta API changes.
        </p>
      </section>

      <section>
        <h2>5. AI Features and Automation</h2>

        <h3>5.1 Nature of AI Outputs</h3>
        <p>
          The Platform incorporates AI-powered features including automated reply
          assistance, intent detection, and order workflow automation. You acknowledge
          that:
        </p>
        <ul>
          <li>
            AI-generated outputs may be inaccurate, incomplete, contextually
            inappropriate, or inconsistent, and should not be treated as definitive or
            professional advice of any kind;
          </li>
          <li>
            AI outputs do not constitute legal, financial, medical, regulatory, or
            other professional advice;
          </li>
          <li>
            the performance and accuracy of AI features may vary based on your
            configuration, training data, and the nature of customer interactions; and
          </li>
          <li>
            Hillside does not warrant any specific commercial, operational, or revenue
            outcome resulting from the use of AI features.
          </li>
        </ul>

        <h3>5.2 Your Oversight Responsibilities</h3>
        <p>
          You remain fully responsible for all communications transmitted through your
          connected channels, including those generated or assisted by AI features.
          Specifically, you must:
        </p>
        <ul>
          <li>
            implement appropriate human oversight for AI-generated communications,
            particularly where errors could cause material harm to customers or your
            business;
          </li>
          <li>
            ensure that automated or AI-assisted messaging complies with all applicable
            laws and Meta Policies, including any requirements for disclosure of
            automated or AI-generated communications to end users;
          </li>
          <li>
            ensure that end users are not materially misled regarding the automated or
            AI-generated nature of communications where disclosure is required by
            applicable law or platform rules; and
          </li>
          <li>
            review AI outputs for accuracy, particularly in contexts involving pricing,
            product descriptions, order confirmations, and customer commitments, before
            those outputs are transmitted or acted upon.
          </li>
        </ul>

        <h3>5.3 AI Disclosure to End Users</h3>
        <p>
          You are solely responsible for providing any required disclosures to your
          end users regarding the use of AI-generated or automated communications, in
          accordance with applicable law and Meta Policies. Hillside does not assume
          responsibility for your compliance with end-user disclosure obligations.
        </p>
      </section>

      <section>
        <h2>6. Fees, Billing, and Payment</h2>

        <h3>6.1 Fee Structure</h3>
        <p>
          Fees for use of the Platform, including subscription fees, usage-based
          fees, commission on confirmed orders, support case fees, and one-time setup
          fees, are as specified in your applicable order form, plan page, or service
          agreement (&quot;Order&quot;). Hillside reserves the right to update fees in
          accordance with Section 6.7.
        </p>

        <h3>6.2 Commission-Based and Event-Based Fees</h3>
        <p>
          Where your Plan includes commission-based or event-triggered pricing, fees
          are calculated based on system-defined billing events—including
          &quot;completed orders&quot; or &quot;resolved support cases&quot;—as
          determined by the Platform&apos;s automation logic, workflow configuration,
          and system records.
        </p>
        <p>
          For billing purposes, an order is deemed &quot;completed&quot; when the
          Platform&apos;s automation and AI-driven workflows determine that all
          configured steps of the order process have been fulfilled in accordance with
          your workflow settings and integration behavior. You acknowledge and agree
          that:
        </p>
        <ul>
          <li>
            system-generated records, event logs, and platform-defined criteria
            constitute the authoritative basis for calculating commission and
            event-based fees, unless demonstrably incorrect due to a verifiable
            Platform error;
          </li>
          <li>
            internal system notifications, administrative records, and billing event
            logs generated upon order completion may include account identifiers and
            are used solely for billing, operational, and compliance purposes; and
          </li>
          <li>
            disputes regarding commission calculations must be raised in accordance
            with Section 6.8 within the prescribed timeframe.
          </li>
        </ul>

        <h3>6.3 Taxes</h3>
        <p>
          All fees are stated exclusive of value-added tax (VAT), goods and services
          tax (GST), sales tax, withholding tax, or other applicable indirect taxes,
          unless expressly stated otherwise. Where required by applicable law, Hillside
          will charge and collect such taxes, which are payable by you in addition to
          stated fees. You are responsible for determining whether any withholding or
          other taxes apply to payments made to Hillside and for remitting such amounts
          to the appropriate tax authority.
        </p>

        <h3>6.4 Billing Cycle and Payment Terms</h3>
        <p>
          Unless otherwise agreed in your Order, fees are calculated monthly in arrears
          based on Platform activity during the applicable billing period. Invoices
          are issued at the end of each billing cycle and are payable within seven (7)
          calendar days of the invoice date. Payments must be made via bank transfer or
          other payment methods specified in your invoice or account dashboard. All
          fees are denominated and payable in Euro (EUR) unless otherwise specified in
          your Order.
        </p>

        <h3>6.5 Late Payment and Suspension</h3>
        <p>
          If payment is not received by the due date, Hillside may: (a) charge interest
          on overdue amounts at the rate of 1.5% per month (or the maximum rate
          permitted by applicable law, whichever is lower); and (b) after written
          notice and a grace period of ten (10) calendar days, suspend or restrict your
          access to the Platform. Continued non-payment may result in termination of
          your account under Section 12.
        </p>

        <h3>6.6 Refunds and Credits</h3>
        <p>
          All fees are non-refundable except where expressly required by applicable
          mandatory law. At Hillside&apos;s sole discretion, service credits may be
          issued in cases of material service disruption directly caused by Hillside,
          as documented in our service records.
        </p>

        <h3>6.7 Price Changes</h3>
        <p>
          Hillside may update fees and pricing with at least thirty (30) days&apos;
          prior written notice (by email or in-platform notification). Updated pricing
          applies at the commencement of the next billing cycle following expiration
          of the notice period. If you do not wish to accept updated pricing, you may
          terminate your account before the updated pricing takes effect.
        </p>

        <h3>6.8 Billing Disputes</h3>
        <p>
          You must notify Hillside in writing of any billing dispute within five (5)
          calendar days of the applicable invoice date, including a detailed
          description of the disputed amount and supporting evidence. Invoices not
          disputed within this period are deemed accepted and final. Hillside will
          investigate disputed amounts in good faith and respond within fifteen (15)
          business days.
        </p>

        <h3>6.9 Billing Ambiguities</h3>
        <p>
          In the event of ambiguity regarding usage metrics, billable event
          classification, or platform activity records, Hillside reserves the right to
          make reasonable good-faith determinations based on available system data,
          event logs, and operational records. Such determinations shall be final unless
          successfully challenged under Section 6.8.
        </p>
      </section>

      <section>
        <h2>7. Data Processing and Privacy</h2>

        <h3>7.1 Privacy Policy</h3>
        <p>
          Hillside&apos;s collection, use, and disclosure of personal data in
          connection with the Platform is described in the Hillside Privacy Policy,
          available at{' '}
          <a href="https://byhillside.com/privacy-policy">
            byhillside.com/privacy-policy
          </a>
          , which is incorporated into these Terms by reference. In the event of
          conflict between these Terms and the Privacy Policy with respect to data
          processing matters, the Privacy Policy governs.
        </p>

        <h3>7.2 Processor Role</h3>
        <p>
          With respect to personal data processed through the Platform on behalf of
          your business—including Meta Platform Data and end-user message data—Hillside
          acts as a data processor (or service provider under applicable law). You act
          as the data controller (or business, as applicable) and retain responsibility
          for the lawfulness of the underlying data collection and the instructions you
          provide to Hillside for processing.
        </p>

        <h3>7.3 Data Processing Agreement</h3>
        <p>
          If you require a Data Processing Agreement (DPA) to satisfy obligations under
          the GDPR, UK GDPR, or other applicable data protection law, please contact{' '}
          <a href="mailto:privacy@byhillside.com">privacy@byhillside.com</a>. We will
          provide a DPA on terms consistent with applicable law and our processing
          activities.
        </p>

        <h3>7.4 Your Data Obligations</h3>
        <p>You represent and warrant that:</p>
        <ul>
          <li>
            you have obtained all consents and have all lawful bases required under
            applicable law to permit Hillside to process personal data on your behalf,
            including end-user message data obtained through Meta channels;
          </li>
          <li>
            you will not instruct Hillside to process personal data in a manner that
            would cause Hillside or you to violate applicable data protection law or
            Meta Policies;
          </li>
          <li>
            you will cooperate with Hillside to fulfill valid data subject rights
            requests, including requests for access, correction, deletion, or
            portability, as required by applicable law; and
          </li>
          <li>
            you will promptly notify Hillside if you become aware of any actual or
            suspected breach of personal data relating to your use of the Platform.
          </li>
        </ul>

        <h3>7.5 Subprocessors</h3>
        <p>
          Hillside uses authorized subprocessors to operate the Platform, including AI
          and infrastructure providers identified in the Privacy Policy. Hillside
          maintains written agreements with all subprocessors that impose data
          protection obligations at least equivalent to those set forth in these Terms
          and the Privacy Policy. A current list of key subprocessors is maintained in
          the Privacy Policy.
        </p>
      </section>

      <section>
        <h2>8. Intellectual Property</h2>

        <h3>8.1 Hillside IP</h3>
        <p>
          Hillside and its licensors retain all intellectual property rights in and to
          the Platform, including all software, algorithms, models, documentation,
          trademarks, and underlying technology. These Terms do not grant you any
          ownership interest in the Platform or Hillside&apos;s intellectual property.
        </p>

        <h3>8.2 Customer Content</h3>
        <p>
          You retain all intellectual property rights in your business content uploaded
          to or processed through the Platform (&quot;Customer Content&quot;),
          including product catalogs, message templates, and AI configuration data. You
          grant Hillside a limited, non-exclusive, royalty-free license to process,
          store, and use Customer Content solely to provide, secure, and improve the
          Platform and related services during the Term.
        </p>

        <h3>8.3 Feedback</h3>
        <p>
          If you submit feedback, suggestions, or corrections regarding AI outputs or
          Platform features, you grant Hillside the right to use such feedback without
          restriction and without obligation to compensate you. Hillside may use AI
          feedback data, including associated message context where necessary, to
          improve system performance, fine-tune models, and enhance response quality, as
          described in the Privacy Policy.
        </p>
      </section>

      <section>
        <h2>9. Service Availability and Changes</h2>

        <h3>9.1 Service Availability</h3>
        <p>
          Hillside will use commercially reasonable efforts to maintain Platform
          availability. However, Hillside does not guarantee uninterrupted or
          error-free access to the Platform. Scheduled maintenance, third-party outages
          (including Meta API outages), and events outside Hillside&apos;s reasonable
          control may result in temporary service interruptions.
        </p>

        <h3>9.2 Platform Changes</h3>
        <p>
          Hillside reserves the right to modify, update, or discontinue any features or
          components of the Platform. Hillside will provide reasonable advance notice of
          material changes that materially reduce core functionality. Minor updates, bug
          fixes, security patches, and compliance-driven changes may be implemented
          without prior notice.
        </p>

        <h3>9.3 Force Majeure</h3>
        <p>
          Hillside shall not be liable for any delay or failure in performance resulting
          from causes beyond its reasonable control, including acts of God, internet
          infrastructure failures, third-party platform outages (including Meta
          service disruptions), governmental actions, or labor disputes.
        </p>
      </section>

      <section>
        <h2>10. Confidentiality</h2>
        <p>
          Each party agrees to keep confidential any non-public information disclosed by
          the other party that is designated as confidential or that a reasonable person
          would understand to be confidential given the nature of the information and
          the circumstances of disclosure (&quot;Confidential Information&quot;).
          Confidential Information does not include information that: (a) is or becomes
          publicly available through no fault of the receiving party; (b) was known to
          the receiving party prior to disclosure; (c) is independently developed by the
          receiving party without reference to the disclosing party&apos;s information;
          or (d) must be disclosed pursuant to applicable law or legal process (provided
          the receiving party gives prompt notice and cooperates with efforts to limit
          disclosure).
        </p>
      </section>

      <section>
        <h2>11. Representations and Warranties</h2>
        <p>
          Each party represents and warrants that it has the legal authority to enter
          into these Terms. You additionally represent and warrant that:
        </p>
        <ul>
          <li>
            your use of the Platform will comply with all applicable laws and
            regulations, including data protection laws and applicable Meta Policies;
          </li>
          <li>
            you own or have all necessary rights and authorizations to transmit the
            Customer Content you process through the Platform;
          </li>
          <li>
            your use of the Platform will not infringe the intellectual property rights
            or privacy rights of any third party; and
          </li>
          <li>
            the information you provide to Hillside in connection with account
            registration and billing is accurate and will be maintained as current.
          </li>
        </ul>
      </section>

      <section>
        <h2>12. Suspension and Termination</h2>

        <h3>12.1 Termination by Customer</h3>
        <p>
          You may terminate your account at any time by notifying us at{' '}
          <a href="mailto:support@byhillside.com">support@byhillside.com</a> or through
          the account settings interface. Termination is effective at the end of the
          then-current billing cycle. Fees paid prior to termination are non-refundable
          unless required by applicable mandatory law.
        </p>

        <h3>12.2 Suspension and Termination by Hillside</h3>
        <p>
          Hillside may immediately suspend your access to the Platform, or terminate
          these Terms with written notice, if:
        </p>
        <ul>
          <li>
            you materially breach these Terms and fail to cure such breach within ten
            (10) calendar days of written notice (where the breach is capable of cure);
          </li>
          <li>
            you violate applicable Meta Policies in a manner that jeopardizes
            Hillside&apos;s API access or platform standing with Meta;
          </li>
          <li>
            you fail to pay fees when due and the amount remains outstanding after ten
            (10) days of written notice;
          </li>
          <li>
            your use of the Platform creates actual or imminent legal risk, security
            threats, or harm to Hillside, its users, or third parties; or
          </li>
          <li>
            Hillside is required to terminate access by applicable law, regulatory
            directive, or court order.
          </li>
        </ul>

        <h3>12.3 Effect of Termination</h3>
        <p>
          Upon termination, your right to access and use the Platform immediately ceases.
          Hillside will handle your data following termination in accordance with the
          Privacy Policy and applicable law, including applicable retention and deletion
          obligations. Provisions that by their nature survive termination—including
          Sections 6, 8, 10, 13, 14, 15, and 17—shall continue in effect.
        </p>
      </section>

      <section>
        <h2>13. Disclaimers</h2>
        <p className="uppercase">
          THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
          LAW, HILLSIDE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY
          IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
          NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE
          OF TRADE.
        </p>
        <p className="mt-4 uppercase">
          HILLSIDE DOES NOT WARRANT THAT: (A) THE PLATFORM WILL MEET YOUR SPECIFIC
          REQUIREMENTS; (B) THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE, OR
          ERROR-FREE; (C) AI-GENERATED OUTPUTS WILL BE ACCURATE, COMPLETE, OR SUITABLE
          FOR ANY PURPOSE; OR (D) ANY ERRORS WILL BE CORRECTED.
        </p>
      </section>

      <section>
        <h2>14. Limitation of Liability</h2>
        <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:</p>

        <h3>14.1</h3>
        <p className="uppercase">
          HILLSIDE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS,
          REVENUE, BUSINESS, GOODWILL, DATA, OR ANTICIPATED SAVINGS, ARISING OUT OF OR
          RELATED TO YOUR USE OF OR INABILITY TO USE THE PLATFORM, REGARDLESS OF CAUSE
          AND WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY,
          OR ANY OTHER LEGAL THEORY, EVEN IF HILLSIDE HAS BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES.
        </p>

        <h3>14.2</h3>
        <p className="uppercase">
          HILLSIDE&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF
          OR RELATED TO THESE TERMS OR THE PLATFORM SHALL NOT EXCEED THE GREATER OF: (A)
          THE TOTAL FEES PAID BY YOU TO HILLSIDE IN THE TWELVE (12) MONTHS IMMEDIATELY
          PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED EUROS
          (€100).
        </p>

        <h3>14.3</h3>
        <p className="uppercase">
          SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR
          CERTAIN TYPES OF DAMAGES. IN SUCH JURISDICTIONS, HILLSIDE&apos;S LIABILITY IS
          LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.
        </p>
      </section>

      <section>
        <h2>15. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Hillside, its officers,
          directors, employees, agents, and licensors from and against any claims,
          liabilities, damages, losses, judgments, and expenses (including reasonable
          legal fees) arising out of or relating to:
        </p>
        <ul>
          <li>your violation of these Terms or applicable law;</li>
          <li>
            your use of the Platform in a manner not expressly authorized by these Terms;
          </li>
          <li>
            your infringement of any third-party intellectual property, privacy, or
            other rights;
          </li>
          <li>your violation of applicable Meta Policies; or</li>
          <li>
            Customer Content uploaded to or processed through the Platform.
          </li>
        </ul>
        <p>
          Hillside reserves the right to assume exclusive control of the defense of any
          claim for which indemnification is sought, at your expense, in which case you
          agree to cooperate with Hillside&apos;s defense of such claim.
        </p>
      </section>

      <section>
        <h2>16. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the
          Republic of Kosovo, without regard to its conflict-of-laws rules. The parties
          submit to the exclusive jurisdiction of the competent courts of Pristina,
          Kosovo, for resolution of any dispute arising out of or relating to these
          Terms or the Platform, except where applicable mandatory law requires
          otherwise.
        </p>
        <p>
          Neither party waives any right to seek interim injunctive or other equitable
          relief in any competent court where necessary to protect its rights pending
          final resolution of a dispute.
        </p>
      </section>

      <section>
        <h2>17. General Provisions</h2>

        <h3>17.1 Entire Agreement</h3>
        <p>
          These Terms, together with the Privacy Policy and any applicable Order,
          constitute the entire agreement between the parties with respect to the
          Platform and supersede all prior and contemporaneous agreements,
          representations, and understandings. In the event of conflict, the order of
          precedence is: (1) Order, (2) these Terms, (3) Privacy Policy.
        </p>

        <h3>17.2 Amendments</h3>
        <p>
          Hillside may amend these Terms by posting an updated version at{' '}
          <a href="https://byhillside.com/terms">byhillside.com/terms</a> with
          reasonable advance notice of material changes. Continued use of the Platform
          following the effective date of amended Terms constitutes your acceptance. If
          you do not accept amended Terms, you must cease use of the Platform and
          notify Hillside of your termination.
        </p>

        <h3>17.3 Severability</h3>
        <p>
          If any provision of these Terms is found unenforceable by a court of competent
          jurisdiction, that provision shall be modified to the minimum extent necessary
          to make it enforceable, and the remaining provisions shall continue in full
          force and effect.
        </p>

        <h3>17.4 No Waiver</h3>
        <p>
          Hillside&apos;s failure to exercise or enforce any right or provision of these
          Terms shall not constitute a waiver of such right or provision, unless made
          in writing and signed by an authorized representative of Hillside.
        </p>

        <h3>17.5 Assignment</h3>
        <p>
          You may not assign or transfer your rights or obligations under these Terms
          without Hillside&apos;s prior written consent. Hillside may assign these Terms,
          including in connection with a merger, acquisition, or sale of assets, upon
          written notice to you.
        </p>

        <h3>17.6 Notices</h3>
        <p>
          Notices to Hillside must be sent to{' '}
          <a href="mailto:legal@byhillside.com">legal@byhillside.com</a> or to the
          address below. Notices to you will be sent to the email address associated
          with your account. Notices are effective upon confirmed delivery.
        </p>
      </section>

      <section>
        <h2>18. Contact and Legal Notices</h2>
        <p>Hillside L.L.C.</p>
        <p>
          St. Ndue Përlleshi, 207, Floor 2, No. 8, Matiçan, Pristina, Kosovo
        </p>
        <p>
          Support:{' '}
          <a href="mailto:support@byhillside.com">support@byhillside.com</a>
        </p>
        <p>
          Privacy:{' '}
          <a href="mailto:privacy@byhillside.com">privacy@byhillside.com</a>
        </p>
        <p>
          Legal / Notices:{' '}
          <a href="mailto:legal@byhillside.com">legal@byhillside.com</a>
        </p>
      </section>
    </LegalPage>
  )
}
