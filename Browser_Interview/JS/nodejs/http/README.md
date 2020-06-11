# nodejs-http

``` shell
ln -s ~/node-v9.3.0-linux-x64/bin/node /usr/bin/node
ln -s ~/node-v9.3.0-linux-x64/bin/npm /usr/bin/npm/root/node-v9.3.0-linux-x64/lib/node_modules/cnpm/bin/cnpm
ln -s ~/node-v9.3.0-linux-x64/bin/npm /usr/bin/npx
ln -s /root/node-v9.3.0-linux-x64/lib/node_modules/cnpm/bin/cnpm /usr/bin/cnpm
ln -s /root/node-v9.3.0-linux-x64/bin/nvm /usr/bin/nvm
ln -s node-v14.4.0-linux-x64/bin/node /usr/local/bin/node
ln -s node-v14.4.0-linux-x64/bin/npm /usr/local/bin/npm
```

``` shell
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/dist
```

``` shell
wget https://nodejs.org/dist/v8.11.2/node-v8.11.2-linux-x64.tar.xz

xz -d node-v8.11.2-linux-x64.tar.xz
tar -xvf node-v8.11.2-linux-x64.tar

ln -s /usr/local/node/node-v8.11.2-linux-x64/bin/node /usr/local/bin/node
ln -s /usr/local/node/node-v8.11.2-linux-x64/bin/npm /usr/local/bin/npm

node -v
```