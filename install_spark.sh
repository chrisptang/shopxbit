#!/bin/bash

cd ~

export SPARK_DOWNLOAD_URL=https://dlcdn.apache.org/spark/spark-3.1.2/spark-3.1.2-bin-hadoop3.2.tgz
export SPARK_HOME=$PWD/spark


wget --no-verbose -O apache-spark.tgz "${SPARK_DOWNLOAD_URL}" \
&& mkdir -p ${SPARK_HOME} \
&& tar -xf apache-spark.tgz -C ${SPARK_HOME} --strip-components=1 \
&& rm apache-spark.tgz