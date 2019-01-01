# Create Store from .csv data files
This is a test of the Jekyll Data Pages Generator (https://github.com/avillafiorita/jekyll-datapage_gen) to use .csv files to manage products in an eCcommerce store. This is just my second attempt at creating a site with Jekyll. The first was a small store (only 5 to 15 products at any one time) using a collection. It is for my daughter's pottery (https://slpottery.com) and is a site that I will manage.

## Why?
I wanted to create an eCommerce model where clients could manage a small online store completely within a local spreadsheet file. I work with many small businesses that don't have the tech skill to handle a solution like WordPress and Woocommerce or the money to have someone else regularly do it. They are familiar with spreadsheets and PayPal, though.

## Features
Currently I've got:

+ Product Archive (index.html) w/ filter
+ Single Product w/ related products

## Problems and Bugs
Again, I'm new to Jekyll and Liquid. I'm also a JavaScript noob. While I've got most of the features more or less working, I'm having a real problems with Related Products. I can't seem to exclude the current product page from the list of Related Products. This may be because the __data_page_generator__ plugin generates product pages directly from `_data` to `/products` within the `_site` folder, bypassing creating a `_collection`.

## Help and Suggestions
I'll be the first one to admit that the code isn't clean. There are probably much neater and easier ways to create what I've got here. And I'm probably murdering "best practices". I'm looking at this more as a playground and proof-of-concept site. Any ideas will be greatly appreciated, especially for the Related Products issue.

## Wish List
It would be great if the Jekyll devs would incorporate `_collection` population via `_data` files into the core. Or maybe Adolfo Villafiorita might make that an option of __data_page_generator__. Neither of these may be possible, but they're both beyond my skill level and pay grade!

