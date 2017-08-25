# Basic Project Template

This basic project template includes:

1. Django project
2. Bourbon and Bitters
3. Jeet grid system
4. Webpack and Yarn setup
5. Responsive crispy forms with Parsley validation
6. "Chosen" UI widget for select elements
7. Magnific popup for responsive modals

Version: 0.1.4

Quick start
-----------

1. Clone the project or download from GitHub and open.

2. Optional: Rename 'project' in directory names, file names and settings strings with the name of your project.
   (Don't forget `project/project/static/bower.json`.)

3. Create a virtualenv for this project: `mkvirtualenv project_name`

4. Install requirements: `pip install -r requirements.txt`

5. Create a database and local_settings.py based on the included local_settings_example.py

6. If necessary, install Grunt with `npm install -g grunt-cli`.

7. In your Terminal, navigate to the project folder and type `npm install webpack --save-dev`

8. Install npm modules with `npm install`.

9. Install javascript modules with `yarn install`.

10. Run Webpack by running `webpack` from the main project folder (same directory as package.json).

11. In another shell, cd to your project directory/< YOUR PROJECT NAME >/ and enter: 
```
python manage.py migrate
python manage.py runserver

```


Settings
-----------

GOOGLE_ACCOUNT_CODE = add your GA code to activate tracking. (Only when DEBUG=False)
