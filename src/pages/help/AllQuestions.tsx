import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import FaqQuestion from '../../components/faq-question/FaqQuestion'
import { getExternalLinkAttributes } from '../../features/utils'

import './all-questions.less'

const getLink = (url: string) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a href={url} {...getExternalLinkAttributes()} />
)

export const AllQuestions: React.FC = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'faqs' })

  return (
    <>
      <FaqQuestion key="1" title={t('question1.title')}>
        <Trans
          i18nKey="faqs.question1.answer"
          components={{
            p: <p />,
            ul: <ul />,
            li: <li />,
          }}
        >
          <p>
            After the horrific loss of our favorite Ingress fan page, some
            agents came together to start this project.
          </p>
          <ul>
            <li>get everyone involved</li>
            <li>be open source (soon™)</li>
            <li>be the long-term solution for finding banners</li>
            <li>never stop developing</li>
          </ul>
        </Trans>
      </FaqQuestion>
      <FaqQuestion key="2" title={t('question2.title')}>
        <Trans
          i18nKey="faqs.question2.answer"
          components={{
            b: <b />,
            ol: <ol />,
            li: <li />,
            iitc: getLink('//iitc.app/download_desktop.html'),
            plugin: getLink('/iitc-plugin-bannergress.user.js'),
            ul: <ul />,
          }}
        >
          <ol>
            <li>
              Install{' '}
              <a href="https://iitc.app/download_desktop.html">IITC-CE</a> (
              <b>Recommendation:</b> IITC Button browser add-on)
            </li>
            <li>
              Install the{' '}
              <a href="/iitc-plugin-bannergress.user.js">bannergress plugin</a>{' '}
              <br />
              <i>
                <b>Caution:</b> If you use a userscript manager parallel to the
                IITC browser add-on, you’re getting two tabs with installations;
                Install the plugin in the IITC Button view tab
              </i>
            </li>
            <li>
              Click on the <b>IITC icon</b> in your browser and make sure the
              following <b>two plugins are active</b>:
              <ul>
                <li>Misc &gt; Bannergress</li>
                <li>Info &gt; Missions</li>
              </ul>
            </li>
            <li>
              <b>Refresh</b> (F5) your IITC
            </li>
            <li>
              Open <b>Bannergress settings</b> <br />
              <i>You can find this link at the end of the right sidebar</i>
            </li>
            <li>
              You have to <b>log in</b> first with your Google account <br />
              <i>
                Click on <b>Log in</b> button
              </i>
            </li>
          </ol>
          <p>Now you are ready to scan missions! (Part 2)</p>
        </Trans>
      </FaqQuestion>
      <FaqQuestion key="3" title={t('question3.title')}>
        <Trans
          i18nKey="faqs.question3.answer"
          components={{
            b: <b />,
            ol: <ol />,
            li: <li />,
            iitc: getLink('//intel.ingress.com/'),
            ul: <ul />,
          }}
        >
          <ol>
            <li>
              Open your <a href="https://intel.ingress.com/">IITC-CE</a>
            </li>
            <li>Go to the area which you want to scan</li>
            <li>
              <b>Zoom very closely</b> in mission dense areas <br />
              <i>
                <b>Caution:</b> Only Top 25 missions will be shown!
              </i>
            </li>
            <li>
              Open <b>Missions in view</b>
              <br />
              <i>You can find this link at the end of the right sidebar</i>
            </li>
            <li>
              A new window with Bannergress utilities on the top and a mission
              list including status (Only Top 25!) should be opened. <br />
              Now you can scan the missions in different ways: <br />
              <ul>
                <li>
                  The fastest way to get many missions uploaded is to{' '}
                  <b>Process all!</b>{' '}
                </li>
                <li>
                  If you explicitly want to upload one banner: use the{' '}
                  <b>Filter by mission name</b>
                </li>
                <li>
                  You can also upload <b>single missions</b> with the 🠋 on the
                  right
                </li>
              </ul>
            </li>
            <li>
              <b>Navigate</b> with the map controls (“N”, “E”, S”, “W”) and{' '}
              <b>repeat</b> step 5 <br />
              <i>We do get only missions if you hit a button!</i>
            </li>
          </ol>
        </Trans>
      </FaqQuestion>
      <FaqQuestion key="6" title={t('question6.title')}>
        <Trans
          i18nKey="faqs.question6.answer"
          components={{
            iitcbutton: getLink('https://iitc.app/download_desktop'),
            tampermonkey: getLink('https://www.tampermonkey.net/'),
            creatorplugin: getLink(
              'https://bannergress.com/creator-plugin-bannergress.user.js'
            ),
            missioncreator: getLink('https://missions.ingress.com/'),
            ol: <ol />,
            li: <li />,
          }}
        />
      </FaqQuestion>
      <FaqQuestion key="4" title={t('question4.title')}>
        <Trans
          i18nKey="faqs.question4.answer"
          components={{
            b: <b />,
            ol: <ol />,
            li: <li />,
            liem: <li className="faq-tab-10em" />,
            div: <div />,
          }}
        >
          <ol>
            <li>
              You have to be <b>logged in</b>
            </li>
            <li>
              You can find <b>Submit a new banner</b> on our landing page (Home)
            </li>
            <li>
              New banner
              <ol>
                <li className="faq-tab-10em">
                  <div>Add Missions:</div>
                  <div>
                    search for the banner name or author.
                    <br />
                    <i>Pro Tip: You can use % for a placeholder</i>
                    <br />
                    You can add all or add specific missions with the ➔
                  </div>
                </li>
                <li className="faq-tab-10em">
                  <div>Arrange:</div>
                  <div>
                    The website tries to arrange the missions automatically.{' '}
                    <br />
                    You can always edit the mission numbers manually. <br />
                    <i>
                      If the missions can be finished in any order, check the
                      advanced options in information
                    </i>
                  </div>
                </li>
                <li className="faq-tab-10em">
                  <div>Information:</div>
                  <div>
                    Please check the banner title, description and preview.
                    <br />
                    Click on <b>Review</b>
                  </div>
                </li>
                <li className="faq-tab-10em">
                  <div>Review:</div>
                  <div>
                    You can see all banner information. If you are happy, click{' '}
                    <b>Submit Banner</b>
                  </div>
                </li>
              </ol>
            </li>
          </ol>
        </Trans>
      </FaqQuestion>
      <FaqQuestion key="7" title={t('question7.title')}>
        <Trans
          i18nKey="faqs.question7.answer"
          components={{
            accountpage: getLink('https://bannergress.com/account'),
            div: <div />,
            ol: <ol />,
            li: <li />,
          }}
        />
      </FaqQuestion>
      <FaqQuestion key="5" title={t('question5.title')}>
        <Trans
          i18nKey="faqs.question5.answer"
          components={{
            b: <b />,
            missioncreator: getLink('https://missions.ingress.com/'),
            slicer: getLink('https://softspot.nl/ingress/bannercropper/'),
            iitc: getLink('https://iitc.app/'),
            plugin: getLink('/iitc-plugin-bannergress.user.js'),
            plugin2: getLink(
              'https://softspot.nl/ingress/plugins/iitc-plugin-missions-addon.user.js'
            ),
          }}
        >
          <p>
            ...the <a href="https://missions.ingress.com/">mission creator</a>?
          </p>
          <p>
            ...a{' '}
            <a href="https://www.giacintogarcea.com/ingress/tools/missionset/">
              tool to slice
            </a>{' '}
            a banner picture?
          </p>
          <p>
            <br />
          </p>
          <p>
            ...the <a href="https://iitc.app/">IITC-CE</a>?
          </p>
          <p>
            ...the{' '}
            <a href="/iitc-plugin-bannergress.user.js">bannergress plugin</a>?
          </p>
          <p>
            ...an{' '}
            <a href="https://softspot.nl/ingress/plugins/iitc-plugin-missions-addon.user.js">
              IITC plugin
            </a>{' '}
            which shows <b>more</b> than the Top 25 missions?
          </p>
        </Trans>
      </FaqQuestion>
    </>
  )
}
