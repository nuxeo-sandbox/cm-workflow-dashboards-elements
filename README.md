# About Case Management Showcase Workflow Dashboards

Workflow Dashboards for the Nuxeo Case Management Showcase.

These are Polymer Web components.

# Requirements

Access to a local copy of the Nuxeo Case Management Showcase demo is required. It will not work with the live server out of the box.

Install Node.js (I use [Homebrew](http://brew.sh/)).

Navigate to the folder containing the elements in shell/terminal and then:

    npm install -g bower
    npm install -g grunt
    npm install
    bower install

# Usage

A sample application is included.

## Grunt

You can run it via:

    grunt

By default a proxy is created to localhost to handle Nuxeo authentication.  You can modify `Gruntfile.js` to change the proxy settings.

## Polyserve

You can alternatively run it via `polyserve` but you need to make a few changes:

* Enable CORS in your nuxeo application. Example CORS for polyserve:

        <extension target="org.nuxeo.ecm.platform.web.common.requestcontroller.service.RequestControllerService" point="corsConfig">
            <corsConfig name="forPolyserve" allowOrigin="http://localhost:3000">
                <pattern>/nuxeo/.*</pattern>
            </corsConfig>
        </extension>

* Install polyserve:
  * `npm install -g polyserve`
* Edit `demo/demo-wf-*.html` and modify the `<nuxeo-connection>` element with the URL for the server. For example:
  * `<nuxeo-connection url="http://localhost:8080/nuxeo"></nuxeo-connection>`
  * The user name and password can be included here as well. See the [`nuxeo-elements` documentation](https://doc.nuxeo.com/x/XJCRAQ).

Then run it:

    polyserve -p 3000

Once running, you can checkout the demo at [http://localhost:3000/components/cm-workflow-dashboards/demo](http://localhost:3000/components/cm-workflow-dashboards/demo).

# Licensing

[GNU Lesser General Public License (LGPL) v2.1](http://www.gnu.org/licenses/lgpl-2.1.html)

# About Nuxeo

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Netflix, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. More information is available at [www.nuxeo.com](http://www.nuxeo.com).