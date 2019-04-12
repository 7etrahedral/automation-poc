* Install firefox esr
  
* Install Ruby 2.3.0

* Install Dependencies
    ```sh
    sudo apt-get install libmysqlclient-dev
    sudo apt-get install cmake pkg-config 
    sudo ln -s /usr/bin/make /usr/bin/gmake
    sudo apt-get install libav-tools
    sudo apt-get install xvfb
    ```

* Install bundler
    ```sh
    gem install bundle
    ```

* Run bundle
    ```sh
    bundle install
    ```

* Copy environment
    ```sh
    cp env.sample .env
    ```

* Run scenario
    ```sh
    cucumber
    ```
