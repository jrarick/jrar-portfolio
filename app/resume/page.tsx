export default function Resume() {
  return (
    <section className="mx-auto my-16 max-w-2xl">
      <h1 className="mb-12 text-3xl font-semibold tracking-tighter">Resume</h1>

      {/* Professional Experience */}
      <div className="mb-16">
        <h2 className="mb-8 border-b border-zinc-300 pb-3 text-2xl font-semibold tracking-tighter">
          Professional Experience
        </h2>

        {/* Longhorn Design Studio */}
        <div className="mb-10">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Longhorn Design Studio</h3>
              <p className="text-zinc-600">Software Consultant</p>
            </div>
            <div className="text-right text-sm text-zinc-600">
              <p>Austin, TX</p>
              <p>Aug 2023 - Present</p>
            </div>
          </div>
          <ul className="space-y-2 text-zinc-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Contributed to Setpoint's fintech software using{" "}
                <strong>Flask</strong> and <strong>Next.js</strong>, improving
                front end engineering practices
              </span>
            </li>
            <li className="ml-5 flex items-start">
              <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300"></span>
              <span>
                Built data visualizations and new interactive table components
                for data heavy reports
              </span>
            </li>
            <li className="ml-5 flex items-start">
              <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300"></span>
              <span>
                Led front-end implementation for new products including Data
                Suite, Optimizer, and Active Config
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Migrated public WordPress site to <strong>Sanity</strong> and{" "}
                <strong>Next.js</strong> to reduce authoring friction of
                previous configuration
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Constructed fully-featured private job board for non-profit
                organization using <strong>Remix/React Router 7</strong>
              </span>
            </li>
          </ul>
        </div>

        {/* Tightrope Media Systems */}
        <div className="mb-10">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Tightrope Media Systems</h3>
              <p className="text-zinc-600">Front End Engineer</p>
            </div>
            <div className="text-right text-sm text-zinc-600">
              <p>Austin, TX</p>
              <p>Nov 2022 - June 2023</p>
            </div>
          </div>
          <ul className="space-y-2 text-zinc-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Led effort to migrate outdated UIs written in Ember.js into{" "}
                <strong>React/Remix</strong> and <strong>TailwindCSS</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Completed redesign of support site leveraging{" "}
                <strong>Sanity</strong> to manage content and{" "}
                <strong>Remix</strong> to handle routing and UI
              </span>
            </li>
            <li className="ml-5 flex items-start">
              <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300"></span>
              <span>
                Built custom <strong>Sanity studio</strong> configuration and
                schema to support custom block content types
              </span>
            </li>
            <li className="ml-5 flex items-start">
              <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-300"></span>
              <span>
                Integrated <strong>Algolia</strong> for managing pagination,
                search, and filtering of user manual, docs, and articles
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Collaborated with graphic designer to design and execute UIs for
                new features including audio monitoring tools, closed captioning
                support, video clip editing, and multi-tiered dashboard settings
                panels
              </span>
            </li>
          </ul>
        </div>

        {/* Event Rental Systems */}
        <div className="mb-10">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Event Rental Systems</h3>
              <p className="text-zinc-600">Senior UI Engineer</p>
            </div>
            <div className="text-right text-sm text-zinc-600">
              <p>Austin, TX</p>
              <p>April 2021 - Nov 2022</p>
            </div>
          </div>
          <ul className="space-y-2 text-zinc-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Created fully customizable premium website templates{" "}
                <strong>generating $1,200 annually per client</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                <strong>Reduced 3rd party API costs by $16,000</strong> by
                utilizing Redis caching to serve commonly requested resources
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Authored training documentation on onboard junior developers to
                use proprietary ERS system
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Formulated solution for creating dynamically generated Facebook
                ads resulting in <strong>20x return on ad spend</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Created automation pipeline to sync project management tasks
                between Monday.com, Trello, and HubSpot
              </span>
            </li>
          </ul>
        </div>

        {/* Freelance Web Developer */}
        <div className="mb-10">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-zinc-600">Freelance</p>
            </div>
            <div className="text-right text-sm text-zinc-600">
              <p>Louisville, Kentucky</p>
              <p>Jul 2019 - Nov 2020</p>
            </div>
          </div>
          <ul className="space-y-2 text-zinc-700">
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Contributed to the development of a mobile app, leveraging{" "}
                <strong>React Native</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Integrated app with <strong>React Navigation</strong>,{" "}
                <strong>Redux</strong>, and <strong>Google Maps API</strong>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Translated PSD mockups into interactive <strong>React</strong>{" "}
                single page app views
              </span>
            </li>
            <li className="flex items-start">
              <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-zinc-400"></span>
              <span>
                Built business and organization websites using{" "}
                <strong>WordPress</strong> and <strong>Elementor</strong> or{" "}
                <strong>Divi</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <h2 className="mb-8 border-b border-zinc-300 pb-3 text-2xl font-semibold tracking-tighter">
          Education
        </h2>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">Boyce College</h3>
            <p className="text-zinc-600 italic">Theological Studies</p>
          </div>
          <div className="text-right text-sm text-zinc-600">
            <p>Louisville, KY</p>
            <p>2011-2013, 2016-2018</p>
          </div>
        </div>
      </div>
    </section>
  )
}
