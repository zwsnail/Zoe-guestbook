<template>
  <div>
    <el-card shadow="hover" v-for="(signature, index) in signatures" :key="index">
      <div class="card">
        <div class="left-wrap">
          <div class="image-wrap">
            <img :src="signature.avatar" :alt="signature.name" />
          </div>

          <div class="name-wrap">
            <span>{{signature.name}}</span>
          </div>
        </div>

        <div class="right-wrap">
          <div class="body-detail">{{signature.body}}</div>
          <div class="date-wrap">
            <i class="el-icon-alarm-clock"></i>
            <time class="time">{{signature.date}}</time>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signatures: [],
      pageCount: 1,
      endpoint: "api/signatures"
    };
  },

  created() {
    this.fetch();
  },

  methods: {
    fetch() {
      axios.get(this.endpoint).then(({ data }) => {
        console.log(data);
        this.signatures = data.data;
        this.pageCount = data.meta.last_page;
      });
    },

    report(id) {
      if (confirm("Are you sure you want to report this signature?")) {
        axios
          .put("api/signatures/" + id + "/report")
          .then(response => this.removeSignature(id));
      }
    },

    removeSignature(id) {
      this.signatures = _.remove(this.signatures, function(signature) {
        return signature.id !== id;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-card {
  width: 40%;
  margin: 0 auto 20px auto;
  .card {
    display: flex;
    justify-content: space-around;
    background: yellow;
    .left-wrap {
      border: 1px solid blue;

      .image-wrap {
        image {
        }
      }

      .name-wrap {
        span {
        }
      }
    }

    .right-wrap {
      border: 1px solid red;
      margin-left: 10px;

      .body-detail {
        font-style: Menlo;
      }
      .date-wrap {
        .time {
          color: #eee;
        }
      }
    }
  }
}
</style>
