<template>
    <div>
      <el-form :model="formData" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="formData.age"></el-input-number>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          age: null
        }
      }
    },
    methods: {
      submitForm() {
        // 在这里处理提交问卷的逻辑
        console.log(this.formData)
      }
    }
  }
  </script>