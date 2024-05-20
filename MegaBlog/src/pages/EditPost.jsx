import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import AppwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setpost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      AppwriteService.getPost(slug).then((post) => {
        if (post) {
          setpost(post);
        }
      });
    } else {
      navigate("/");
    }
  });
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
