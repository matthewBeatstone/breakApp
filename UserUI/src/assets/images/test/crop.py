from PIL import Image
import glob, os

for image_file in glob.glob('*'):
    print(image_file)
    command = 'convert {0} -resize 400x400 {0}'.format(image_file)
    print(command)
    os.system(command) 
