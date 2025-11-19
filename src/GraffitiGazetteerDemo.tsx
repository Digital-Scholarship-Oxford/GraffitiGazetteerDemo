import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Upload, Link, CheckCircle, Users, MapPin, ExternalLink } from 'lucide-react';

const GraffitiGazetteerDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highlightExternal, setHighlightExternal] = useState(false);

  const slides = [
    // Slide 0: Title
    {
      type: 'title',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-8">
          <div className="mb-12">
            <MapPin className="w-24 h-24 text-amber-500 mx-auto mb-6" />
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Graffiti Inscription Gazetteer
            </h1>
            <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 max-w-2xl">
            <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Principal Investigator</h2>
              <p className="text-xl text-gray-600">Hana Navratilova</p>
            </div>

            <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Senior Research Software Engineer</h2>
              <p className="text-xl text-gray-600">Dr. Imran Asif <a href="https://digitalscholarship.web.ox.ac.uk/people/imran-asif" target='_blank'>@DiSc</a></p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 1: Introduction
    {
      type: 'introduction',
      content: (
        <div className="flex flex-col h-full px-12 py-8 overflow-y-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Project Introduction</h2>

          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="text-gray-700">
              The <span className="font-semibold text-amber-600">Graffiti Inscription Gazetteer</span> is a digital archive dedicated to cataloguing and preserving the stories of graffiti inscriptions across Egypt. Explore locations, the stories behind the inscriptions, and the writers, visitors, and artists who created them.
            </p>

            <p className="text-gray-700">
              The Graffiti Gazetteer project builds a unique resource collecting data on the multilingual corpus of graffiti in Egypt. In a full version, it aims to include historical secondary inscriptions starting with ancient material but with potential to include visitors' texts produced up until the 20th century.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Why Ancient Graffiti Matters</h3>
              <p className="text-gray-700">
                Secondary epigraphy, or graffiti, are probably the most widespread media of the ancient world. Texts and figures added to varied surfaces and places could be produced by nearly everyone. Even though graffiti articulated individual and community concerns and religious and political views, they are underrated.
              </p>
            </div>

            <p className="text-gray-700">
              Short texts and images appeared in funerary environments, on temple architecture, and in mines and quarries. These eloquent traces of past societies offer fragmentary insights into both elite and non-elite lives and the roles that monuments continued to play long after their original construction.
            </p>

            <p className="text-gray-700 font-semibold">
              Empowering research by digital data accessibility has changed the research of graffiti. Egypt offers a fascinating corpus that provides insights extending beyond local or regional histories.
            </p>
          </div>
        </div>
      )
    },

    {
      type: 'intro-demo',
      content: (
        <div className="flex flex-col items-center justify-center text-center h-screen space-y-8 px-4">
          <h2 className="text-5xl font-bold text-gray-800">
            Let’s Start With the Demo
          </h2>

          <a
            href="https://graffiti.discapp.link/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl shadow-lg 
                      hover:bg-purple-700 hover:shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center"
          >
            https://graffiti.discapp.link
          </a>
        </div>
      )
    },
    // Slide 2: Website Demo
    {
      type: 'demo',
      content: (
        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-xl border-4 border-gray-300">
          <iframe
            src="https://graffiti.discapp.link/"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      )
    },

    // Slide 3: Data Manipulation Process
    {
      type: 'process',
      content: (
        <div className="flex flex-col h-full px-12 py-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Data Manipulation Workflow</h2>

          <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto space-y-6">
            <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Entry</h3>
                <p className="text-gray-600">Data inserted into Excel file by research team</p>
              </div>
              <Database className="w-10 h-10 text-blue-500" />
            </div>

            <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Verification & Approval</h3>
                <p className="text-gray-600">PI reviews, validates, and approves changes before upload</p>
              </div>
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>

            <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">RDF Transformation</h3>
                <p className="text-gray-600">System retrieves records and transforms data into RDF Linked Open Data format</p>
              </div>
              <Link className="w-10 h-10 text-purple-500" />
            </div>

            <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Upload</h3>
                <p className="text-gray-600">Admin uploads data with proper authentication and login credentials</p>
              </div>
              <Upload className="w-10 h-10 text-orange-500" />
            </div>

            <div className="flex items-start space-x-4 bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Public Access</h3>
                <p className="text-gray-600">Transformed RDF data becomes visible to public audience</p>
              </div>
              <Users className="w-10 h-10 text-amber-500" />
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Why Linked Open Data
    {
      type: 'lod-intro',
      content: (
        <div className="flex flex-col h-full px-12 py-8 justify-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">Why Linked Open Data?</h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-2xl p-12 text-white mb-8">
              <h3 className="text-4xl font-bold mb-6 text-center">The Power of Connectivity</h3>
              <p className="text-2xl text-center mb-4">
                You don't need to store everything in your database!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-red-500 mb-4 text-center">
                  <Database className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-gray-800">Traditional Approach</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>✗ Store all data locally</li>
                  <li>✗ Duplicate information</li>
                  <li>✗ Manual updates needed</li>
                  <li>✗ Limited connections</li>
                  <li>✗ Data becomes outdated</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8 border-4 border-green-500">
                <div className="text-green-500 mb-4 text-center">
                  <Link className="w-16 h-16 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-gray-800">Linked Open Data</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Link to external sources</li>
                  <li>✓ No data duplication</li>
                  <li>✓ Automatic updates</li>
                  <li>✓ Rich interconnections</li>
                  <li>✓ Always current information</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6">
              <p className="text-xl text-gray-700 text-center">
                <span className="font-bold">Simply provide external links</span> and our system pulls information on the fly!
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: LOD in Action
    {
      type: 'lod-demo',
      content: (
        <div className="flex flex-col h-full px-12 py-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Linked Open Data in Action</h2>

          <div className="flex-1 max-w-6xl mx-auto w-full">
            <div className="bg-white rounded-lg shadow-2xl p-8 h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Inscription Record: Saqqara Dipinto</h3>
                <p className="text-gray-600">18th Dynasty - Djoser Pyramid Complex (TM 100083)</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="text-lg font-semibold text-gray-800">Saqqara, Djoser Pyramid Complex</p>
                    <p className="text-sm text-gray-600">North Chapel, west wall of entrance</p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">Type & Period</p>
                    <p className="text-lg font-semibold text-gray-800">Dipinto, 18th Dynasty</p>
                  </div>

                  <div className="bg-gray-50 rounded p-4">
                    <p className="text-sm text-gray-600 mb-1">RDF Data Model</p>
                    <p className="text-sm font-semibold text-gray-800">CRM CIDOC ontology</p>
                    <p className="text-xs text-gray-600 mt-1">Standardized vocabulary for cultural heritage</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => setHighlightExternal(!highlightExternal)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Toggle External Data Highlight</span>
                  </button>

                  <div className={`rounded p-4 transition-all duration-300 ${highlightExternal ? 'bg-yellow-100 border-4 border-yellow-500 shadow-xl' : 'bg-blue-50'}`}>
                    <div className="flex items-start space-x-2 mb-2">
                      <Link className={`w-5 h-5 mt-1 ${highlightExternal ? 'text-yellow-600' : 'text-blue-600'}`} />
                      <p className="text-sm text-gray-600">Additional Context (from TRISMEGISTOS)</p>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">Trismegistos ID: TM 100083</p>
                    <p className="text-sm text-gray-700">Cross-referenced with multilingual text database</p>
                    {highlightExternal && <p className="text-xs text-yellow-700 mt-2 font-semibold">⚡ Pulled from trismegistos.org</p>}
                  </div>

                  <div className={`rounded p-4 transition-all duration-300 ${highlightExternal ? 'bg-yellow-100 border-4 border-yellow-500 shadow-xl' : 'bg-blue-50'}`}>
                    <div className="flex items-start space-x-2 mb-2">
                      <Link className={`w-5 h-5 mt-1 ${highlightExternal ? 'text-yellow-600' : 'text-blue-600'}`} />
                      <p className="text-sm text-gray-600">Ontology Terms (from THOT)</p>
                    </div>
                    <p className="text-sm text-gray-700">THESAURI & ONTOLOGY - thot.philo.ulg.ac.be</p>
                    <p className="text-sm text-gray-700">FAIR Epigraphy standardized terminology</p>
                    {highlightExternal && <p className="text-xs text-yellow-700 mt-2 font-semibold">⚡ Pulled from THOT ontology</p>}
                  </div>

                  <div className={`rounded p-4 transition-all duration-300 ${highlightExternal ? 'bg-yellow-100 border-4 border-yellow-500 shadow-xl' : 'bg-blue-50'}`}>
                    <div className="flex items-start space-x-2 mb-2">
                      <Link className={`w-5 h-5 mt-1 ${highlightExternal ? 'text-yellow-600' : 'text-blue-600'}`} />
                      <p className="text-sm text-gray-600">Image & Metadata (SDS)</p>
                    </div>
                    <p className="text-sm text-gray-700">Saqqara Digital Survey images</p>
                    <p className="text-sm text-gray-700">Copyright: Griffith Institute Archive</p>
                    {highlightExternal && <p className="text-xs text-yellow-700 mt-2 font-semibold">⚡ Pulled from SDS repository</p>}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 border-2 border-purple-300">
                <p className="text-center text-gray-800 font-semibold text-lg mb-3">
                  🔗 All highlighted information is dynamically retrieved from trusted external sources in real-time!
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white px-3 py-1 rounded-full">TRISMEGISTOS</span>
                  <span className="bg-white px-3 py-1 rounded-full">THOT Ontology</span>
                  <span className="bg-white px-3 py-1 rounded-full">SDS Images</span>
                  <span className="bg-white px-3 py-1 rounded-full">FAIR Epigraphy</span>
                  <span className="bg-white px-3 py-1 rounded-full">CRM CIDOC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Actual Website Screens
    {
      type: 'actual-screens',
      content: (
        <div className="flex flex-col items-center justify-start text-center h-screen py-12 px-4 overflow-y-auto">
          <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Our Actual Website Interface</h2>

          <div className="flex-1 max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-6">
              {/* Screen 1 - Inscription Detail */}
              <div className="bg-white rounded-lg shadow-xl p-6 border-2 border-purple-500">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Database className="w-6 h-6 mr-2 text-purple-600" />
                    Inscription Detail Page
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-700">Local Data</p>
                      <p className="text-gray-600">ID, Location, Type, Period</p>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-3">
                      <div className="flex items-center mb-2">
                        <ExternalLink className="w-4 h-4 mr-2 text-yellow-600" />
                        <p className="font-semibold text-gray-700">TRISMEGISTOS Data</p>
                      </div>
                      <p className="text-gray-600 text-xs">TM ID, Cross-references, Text metadata</p>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-3">
                      <div className="flex items-center mb-2">
                        <ExternalLink className="w-4 h-4 mr-2 text-yellow-600" />
                        <p className="font-semibold text-gray-700">SDS Images</p>
                      </div>
                      <p className="text-gray-600 text-xs">High-res images, Copyright info</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-3">
                        <div className="flex items-center mb-1">
                          <ExternalLink className="w-4 h-4 mr-2 text-yellow-600" />
                          <p className="font-semibold text-gray-700">SDS Metadata</p>
                        </div>
                        <p className="text-xs text-gray-600">Author: Griffith Institute</p>
                        <p className="text-xs text-gray-600">License: [License Info]</p>
                        <p className="text-xs text-gray-600">Published: [Date]</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 text-center mb-5">
                  ⚡ Yellow boxes show data pulled on-the-fly
                </p>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 mb-4 mt-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Link className="w-6 h-6 mr-2 text-indigo-600" />
                    Metadata & Ontology View
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="bg-white rounded p-3">
                      <p className="font-semibold text-gray-700">RDF Structure</p>
                      <p className="text-gray-600 text-xs">CRM CIDOC ontology terms</p>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-3">
                      <div className="flex items-center mb-2">
                        <ExternalLink className="w-4 h-4 mr-2 text-yellow-600" />
                        <p className="font-semibold text-gray-700">THOT Ontology</p>
                      </div>
                      <p className="text-gray-600 text-xs">Standardized terms from thot.philo.ulg.ac.be</p>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded p-3">
                      <div className="flex items-center mb-2">
                        <ExternalLink className="w-4 h-4 mr-2 text-yellow-600" />
                        <p className="font-semibold text-gray-700">FAIR Epigraphy</p>
                      </div>
                      <p className="text-gray-600 text-xs">Linked standards & best practices</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 text-center">
                  ⚡ Ontology terms dynamically linked
                </p>
              </div>

              {/* Screen 3 - Image Viewer */}
              <div className="bg-white rounded-lg shadow-xl p-6 border-2 border-green-500">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
                  <div className="bg-gray-200 rounded h-32 flex items-center justify-center mb-3">
                    <a href='https://graffiti.discapp.link/detail.html?id=see100004' target='_blank'>
                      <img src='TM_Resolver.png' className="w-full" alt="image" />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center mb-3">
                  ⚡ Use TM ID Resolver to fetch other data. Click the image to view the page.
                </p>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-50 rounded-lg p-6 mb-4">
                  <div className="bg-gray-200 rounded flex items-center justify-center mb-3">
                    <a href='https://graffiti.discapp.link/detail.html?id=see100087' target='_blank'>
                      <img src='SDS_Images.png' className="h-80" alt="image" />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center mb-3">
                  ⚡ Use Figshare API to fetch SDS images and metadata. Click image to view.
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-blue-50 rounded-lg p-6 mb-4">
                  <div className="bg-gray-200 rounded flex items-center justify-center mb-3">
                    <a href='https://graffiti.discapp.link/detail.html?id=see100006' target='_blank'>
                      <img src='Thot.png' className="h-80" alt="image" />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center">
                  ⚡ Fetch labels via Thot. Click image to view.
                </p>
              </div>
            </div>

            {/* Screen 4 - Linked Data Graph */}
              <div className="bg-white rounded-lg shadow-xl p-6 border-2 border-amber-500 mt-10">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Link className="w-6 h-6 mr-2 text-amber-600" />
                    Linked Data Network
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="text-center p-4">
                      <div className="inline-block bg-purple-500 text-white rounded-full px-4 py-2 mb-3">
                        Current Inscription
                      </div>
                      <div className="flex justify-center gap-2 flex-wrap">
                        <span className="bg-yellow-50 border-2 border-yellow-400 text-xs px-3 py-1 rounded-full">→ TRISMEGISTOS</span>
                        <span className="bg-yellow-50 border-2 border-yellow-400 text-xs px-3 py-1 rounded-full">→ THOT</span>
                        <span className="bg-yellow-50 border-2 border-yellow-400 text-xs px-3 py-1 rounded-full">→ SDS</span>
                        <span className="bg-yellow-50 border-2 border-yellow-400 text-xs px-3 py-1 rounded-full">→ Related Sites</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-indigo-50 rounded p-3">
                    <p className="text-xs text-gray-700 font-semibold">RDF Graph Visualization</p>
                    <p className="text-xs text-gray-600">All connections use CRM CIDOC vocabulary</p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 text-center">
                  ⚡ Dynamic graph of all linked resources
                </p>
              </div>

            <div className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 text-white text-center">
              <p className="font-bold text-lg">These are the actual screens from our Graffiti Inscription Gazetteer website!</p>
              <p className="text-sm mt-2">Notice how external data (in yellow) enriches our local database seamlessly</p>
            </div>
          </div>
        </div>
      )
    },
    // {
    //   type: 'lod-demo',
    //   content: (
    //     <div className="flex flex-col h-full px-12 py-8">
    //       <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Linked Open Data in Action</h2>

    //       <div className="flex-1 max-w-6xl mx-auto w-full">
    //         <div className="bg-white rounded-lg shadow-2xl p-8 h-full">
    //           <div className="mb-6">
    //             <h3 className="text-2xl font-bold text-gray-800 mb-2">Inscription Record: Saqqara Dipinto</h3>
    //             <p className="text-gray-600">18th Dynasty - Djoser Pyramid Complex (TM 100083)</p>
    //           </div>

    //           <div className="grid grid-cols-2 gap-6">
    //             <div className="space-y-4">
    //               <div className="bg-gray-50 rounded p-4">
    //                 <p className="text-sm text-gray-600 mb-1">Location</p>
    //                 <p className="text-lg font-semibold text-gray-800">Saqqara, Djoser Pyramid Complex</p>
    //                 <p className="text-sm text-gray-600">North Chapel, west wall of entrance</p>
    //               </div>

    //               <div className="bg-gray-50 rounded p-4">
    //                 <p className="text-sm text-gray-600 mb-1">Type & Period</p>
    //                 <p className="text-lg font-semibold text-gray-800">Dipinto, 18th Dynasty</p>
    //               </div>

    //               <div className="bg-gray-50 rounded p-4">
    //                 <p className="text-sm text-gray-600 mb-1">RDF Data Model</p>
    //                 <p className="text-sm font-semibold text-gray-800">CRM CIDOC ontology</p>
    //                 <p className="text-xs text-gray-600 mt-1">Standardized vocabulary for cultural heritage</p>
    //               </div>
    //             </div>

    //             <div className="space-y-4">
    //               <button
    //                 onClick={() => setHighlightExternal(!highlightExternal)}
    //                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center space-x-2"
    //               >
    //                 <ExternalLink className="w-5 h-5" />
    //                 <span>Toggle External Data Highlight</span>
    //               </button>

    //               <div className={`rounded p-4 transition-all duration-300 ${highlightExternal ? 'bg-yellow-100 border-4 border-yellow-500 shadow-xl' : 'bg-blue-50'}`}>
    //                 <div className="flex items-start space-x-2 mb-2">
    //                   <Link className={`w-5 h-5 mt-1 ${highlightExternal ? 'text-yellow-600' : 'text-blue-600'}`} />
    //                   <p className="text-sm text-gray-600">Additional Context (from TRISMEGISTOS)</p>
    //                 </div>
    //                 <p className="text-sm text-gray-700 mb-1">Trismegistos ID: TM 100083</p>
    //                 <p className="text-sm text-gray-700">Cross-referenced with multilingual text database</p>
    //                 {highlightExternal && <p className="text-xs text-yellow-700 mt-2 font-semibold">⚡ Pulled from trismegistos.org</p>}
    //               </div>

    //               <div className={`rounded p-4 transition-all duration-300 ${highlightExternal ? 'bg-yellow-100 border-4 border-yellow-500 shadow-xl' : 'bg-blue-50'}`}>
    //                 <div className="flex items-start space-x-2 mb-2">
    //                   <Link className={`w-5 h-5 mt-1 ${highlightExternal ? 'text-yellow-600' : 'text-blue-600'}`} />
    //                   <p className="text-sm text-gray-600">Ontology Terms (from THOT)</p>
    //                 </div>
    //                 <p className="text-sm text-gray-700">THESAURI & ONTOLOGY - thot.philo.ulg.ac.be</p>
    //                 <p className="text-sm text-gray-700">FAIR Epigraphy standardized terminology</p>
    //                 {highlightExternal && <p className="text-xs text-yellow-700 mt-2 font-semibold">⚡ Pulled from THOT ontology</p>}
    //               </div>

    //               <div className={`rounded p-4 transition-all duration-300 ${highlightExternal ? 'bg-yellow-100 border-4 border-yellow-500 shadow-xl' : 'bg-blue-50'}`}>
    //                 <div className="flex items-start space-x-2 mb-2">
    //                   <Link className={`w-5 h-5 mt-1 ${highlightExternal ? 'text-yellow-600' : 'text-blue-600'}`} />
    //                   <p className="text-sm text-gray-600">Image & Metadata (SDS)</p>
    //                 </div>
    //                 <p className="text-sm text-gray-700">Saqqara Digital Survey images</p>
    //                 <p className="text-sm text-gray-700">Copyright: Griffith Institute Archive</p>
    //                 {highlightExternal && <p className="text-xs text-yellow-700 mt-2 font-semibold">⚡ Pulled from SDS repository</p>}
    //               </div>
    //             </div>
    //           </div>

    //           <div className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 border-2 border-purple-300">
    //             <p className="text-center text-gray-800 font-semibold text-lg mb-3">
    //               🔗 All highlighted information is dynamically retrieved from trusted external sources in real-time!
    //             </p>
    //             <div className="flex flex-wrap justify-center gap-4 text-sm">
    //               <span className="bg-white px-3 py-1 rounded-full">TRISMEGISTOS</span>
    //               <span className="bg-white px-3 py-1 rounded-full">THOT Ontology</span>
    //               <span className="bg-white px-3 py-1 rounded-full">SDS Images</span>
    //               <span className="bg-white px-3 py-1 rounded-full">FAIR Epigraphy</span>
    //               <span className="bg-white px-3 py-1 rounded-full">CRM CIDOC</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setHighlightExternal(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setHighlightExternal(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        <div className="h-full transition-opacity duration-500">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white bg-opacity-90 shadow-lg px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${currentSlide === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setHighlightExternal(false);
                }}
                className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-amber-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${currentSlide === slides.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraffitiGazetteerDemo;