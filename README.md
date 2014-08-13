# Basic Project Template

This basic project template includes:

1. Django project
2. South
3. DirectTemplateView utility
4. django-thumbs utility
5. Bourbon, Neat and Bitters
6. Jeet grid system
7. Grunt and Bower setup

Version: 0.01a

Quick start
-----------

1. Clone the project or download from GitHub and open.

2. Optional: Rename 'project' in directory names, file names and settings strings with the name of your project. (don't forget .bowerrc)

3. Create a virtualenv for this project: `mkvirtualenv project_name`

4. Install requirements: `pip install -r requirements.txt`

5. Create a database and local_settings.py based on the included local_settings_example.py

6. If necessary, install Grunt with `npm install grunt --save-dev`.

7. In your Terminal, navigate to the project folder and type `npm install grunt --save-dev`

8. Install npm modules with `npm install`.

9. Install bower modules with `bower install`.

10. Run Grunt with `grunt`.

11. In another Terminal, cd to your project directory/< YOUR PROJECT NAME >/ and enter `python maanage.py runserver`.


Settings
-----------

GOOGLE_ACCOUNT_CODE = add your GA code to activate tracking. (Only when DEBUG=False)
GOOGLE_ACCOUNT_DOMAIN = add your GA domain for tracking.